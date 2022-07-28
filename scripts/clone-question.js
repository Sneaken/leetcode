import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const url = '' || process.argv[2];
// https://leetcode.cn/problems/:titleSlug/
const Reg = /^https:\/\/leetcode\.cn\/problems\/(.*?)\/$/;
const titleSlug = Reg.exec(url)[1];
// 项目目录下的文件夹路径（把题目放于以下路径中）
const _dirname = '' || process.argv[3];

const __dirname = dirname(fileURLToPath(import.meta.url));

const headers = {
  accept: '*/*',
  'accept-language': 'zh-CN',
  'cache-control': 'no-cache',
  'content-type': 'application/json',
  pragma: 'no-cache',
  'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'x-definition-name': 'question',
  'x-operation-name': 'questionData',
  'x-timezone': 'Asia/Shanghai',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

const isFileExists = async (path) => {
  try {
    await fs.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

function formatter({ titleSlug, translatedContent, codeSnippet }) {
  return (
    `// https://leetcode.cn/problems/${titleSlug}/\n` +
    '// ' +
    translatedContent
      // 去除实体字符
      .replace(/&[^;]+;/g, '')
      // 转义 ^ 符号
      .replace(/<sup>(.*?)<\/sup>/gi, ($0, $1) => `^${$1}`)
      // 去除 html 标签
      .replace(/<\w+>/g, '')
      .replace(/<\/\w+>/g, '')
      // 去掉换行符后面的空格
      .replace(/\n\s+/g, '\n')
      // 合并多个换行符为一个 并加上 ‘//’
      .replace(/\n+/g, '\n// ')
      // 去掉 md 的 引用语法
      .replaceAll('// >', '// ')
      // 去掉多余的 '// '
      .replace(/\/\/ $/, '')
      // 去掉 '// ' 行
      .replace(/\/\/\s{1,}\n/g, '')
      // 去掉 md 的 加粗语法
      .replace(/\*\*(.*?)\*\*/g, ($0, $1) => $1) +
    '\n' +
    codeSnippet
  );
}

async function cloneQuestion(titleSlug, dirname) {
  if (!titleSlug || !dirname) return;
  const {
    data: { question },
  } = await fetch('https://leetcode.cn/graphql/', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      operationName: 'questionData',
      variables: { titleSlug },
      query: `query questionData($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionId
          questionFrontendId
          categoryTitle
          title
          titleSlug
          translatedTitle
          translatedContent
          difficulty
          codeSnippets {
            lang
            langSlug
            code
          }
          topicTags {
            name
            slug
            translatedName
          }
          sampleTestCase
          metaData
          editorType
          style
          exampleTestcases
          jsonExampleTestcases
        }
      }`,
    }),
  }).then((res) => res.json());

  const { questionFrontendId, translatedContent, codeSnippets } = question;

  const filePath = join(__dirname, '..', dirname, questionFrontendId.replaceAll(' ', '') + '.js');
  const isExists = await isFileExists(filePath);
  const jsCodeSnippet = codeSnippets.find((codeSnippet) => codeSnippet.lang === 'JavaScript').code;
  if (isExists) {
    // 原来的文件备份
    const time = new Date();
    await fs.rename(filePath, filePath.replace('.js', `-${time.toLocaleString().replace(/[ /:]/g, '-')}.js`));
  }
  await fs.writeFile(filePath, formatter({ titleSlug, translatedContent, codeSnippet: jsCodeSnippet }));
}

cloneQuestion(titleSlug, _dirname).catch((err) => {
  console.log(err);
});
