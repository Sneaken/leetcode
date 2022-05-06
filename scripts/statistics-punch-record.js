// 打卡统计
import {LeetcodeCookie} from "./config.js"

const headers = {
  "accept": "*/*",
  "accept-language": "zh-CN",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "pragma": "no-cache",
  "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-definition-name": "userProfileQuestions",
  "x-operation-name": "userProfileQuestions",
  "x-timezone": "Asia/Shanghai",
  "Referer": "https://leetcode-cn.com/progress/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}

const getUserProfileQuestions = async (cookie) => {
  const {data: {userProfileQuestions: {questions}}} = await fetch("https://leetcode-cn.com/graphql/", {
    "method": "POST",
    "headers": Object.assign(headers, {
      "cookie": cookie,
    }),
    "body": JSON.stringify({
      operationName: 'userProfileQuestions',
      variables: {
        status: 'ACCEPTED',
        skip: 0,
        first: 30,
        sortField: 'LAST_SUBMITTED_AT',
        sortOrder: 'DESCENDING',
        difficulty: []
      },
      query: `query userProfileQuestions($status: StatusFilterEnum!, $skip: Int!, $first: Int!, $sortField: SortFieldEnum!, $sortOrder: SortingOrderEnum!, $keyword: String, $difficulty: [DifficultyEnum!]) {
  userProfileQuestions(status: $status, skip: $skip, first: $first, sortField: $sortField, sortOrder: $sortOrder, keyword: $keyword, difficulty: $difficulty) {
    totalNum
    questions {
      translatedTitle
      frontendId
      titleSlug
      title
      difficulty
      lastSubmittedAt
    }
  }
}
`
    }),
  }).then(r => r.json())
  let total = 0
  const difficulty = {}
  Object.defineProperty(difficulty, 'toString', {
    enumerable: false,
    value: () => {
      const map = {'easy': '简单', 'medium': '中等', 'hard': '困难'}
      const sort = ['easy', 'medium', 'hard']
      return sort.filter(s => difficulty[s]).map(s => {
        return `${map[s]}: ${difficulty[s]}`
      }).join(', ')
    }
  })
  const days = {}
  const weekdays = getWeekDays()
  for (let item of questions) {
    item.lastSubmittedAt = new Date(item.lastSubmittedAt * 1000).toLocaleDateString()
    if (weekdays.includes(item.lastSubmittedAt)) {
      difficulty[item.difficulty.toLowerCase()] ||= 0
      const {data: {submissionList: {submissions}}} = await getProgressSubmissions(cookie, item.titleSlug)
      submissions.filter(submission => {
        submission.timestamp = new Date(submission.timestamp * 1000).toLocaleDateString()
        return submission.runtime !== "N/A" && weekdays.includes(submission.timestamp)
      }).forEach((submission, index, arr) => {
        days[submission.timestamp] ||= []
        if (index === arr.length - 1) {
          // 首次
          days[submission.timestamp].push(`[${item.frontendId}]`)
          // 当天的不算复习
          const deleteIndex = days[submission.timestamp].findIndex((i) => i === `[复习 ${item.frontendId}]`)
          if (deleteIndex > -1) {
            days[submission.timestamp].splice(deleteIndex, 1)
            return
          }
        } else {
          // 复习
          if (days[submission.timestamp].includes(`[复习 ${item.frontendId}]`)) return
          days[submission.timestamp].push(`[复习 ${item.frontendId}]`)
        }
        total += 1
        difficulty[item.difficulty.toLowerCase()]++
      })
    }
  }
  console.log(`本周统计： 一共完成 ${total} 道`)
  console.log('难度系数:  ' + difficulty)
  weekdays.forEach(day => {
    if (!days[day]) return
    console.log(`${day}: ${[...days[day]].reverse().join(' ')}`)
  })
}
// 获取题目做题详情
const getProgressSubmissions = (cookie, questionSlug) => {
  return fetch("https://leetcode-cn.com/graphql/", {
    "headers": Object.assign(headers, {
      "cookie": cookie,
    }),
    "method": "POST",
    "body": JSON.stringify({
        operationName: 'progressSubmissions',
        variables: {offset: 0, limit: 10, questionSlug},
        query: `query progressSubmissions($offset: Int, $limit: Int, $lastKey: String, $questionSlug: String) {
  submissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
    lastKey
    hasNext
    submissions {
      id
      timestamp
      url
      lang
      runtime
      __typename
    }
    __typename
  }
}
`
      }
    ),
  }).then(r => r.json())
}

// 获取这周周一开始到今天的所有日期
const getWeekDays = () => {
  const date = new Date()
  const week = date.getDay() - 1
  const weekDays = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(date.getTime() - (week - i) * 24 * 3600 * 1000)
    weekDays.push(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())
  }
  return weekDays
}

getUserProfileQuestions(LeetcodeCookie).catch()


