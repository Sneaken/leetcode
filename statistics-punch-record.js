// 打卡统计
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

const getUserProfileQuestions = async (cookie = 'csrftoken=ZqcMUH6LsMcclhBH2wIlqt6o5ZC5X9h0LhdjaPARfFXc8dRo65lREeP12qqqAHte; __auc=69fa29c417e0949b4ee45a9507a; _bl_uid=h1kOUxv3syLdyXsb6u48oCnlsn94; gr_user_id=a29a8cb8-8ccd-4cfe-a3de-6c81f0b6e925; a2873925c34ecbd2_gr_last_sent_cs1=sneaken; aliyungf_tc=e1fdf298fb4ebea3b3bd8632167ad63adbbb1fb1290c87b4519d73b3ba2f772c; __appToken__=; NEW_PROBLEMLIST_PAGE=1; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1649243504; _gid=GA1.2.1910168915.1651427769; a2873925c34ecbd2_gr_session_id=86f9911a-17b3-4d73-928a-2123761ee79b; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=86f9911a-17b3-4d73-928a-2123761ee79b; a2873925c34ecbd2_gr_session_id_86f9911a-17b3-4d73-928a-2123761ee79b=true; _ga_RN3J7V8VS5=GS1.1.1651494070.37.1.1651495017.0; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1651495018; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0X2FmdGVyX29hdXRoIjoiL2NpcmNsZS9hcnRpY2xlLzQ4a3E5ZC8iLCJfYXV0aF91c2VyX2lkIjoiMzk1OTgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjMxZThlNmU2YmFkMDU0OWYxZTlmOTRkN2ZmNjczZjQ0ZjEzMzFkYjM5NDI1OWJkNmZmOTBlYWU3M2Y3Y2QzZmMiLCJpZCI6Mzk1OTgsImVtYWlsIjoiOTI0MzkzNTI3QHFxLmNvbSIsInVzZXJuYW1lIjoiU25lYWtlbiIsInVzZXJfc2x1ZyI6InNuZWFrZW4iLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS1jbi5jb20vYWxpeXVuLWxjLXVwbG9hZC91c2Vycy9zbmVha2VuL2F2YXRhcl8xNTIzNTk3OTUxLnBuZyIsInBob25lX3ZlcmlmaWVkIjp0cnVlLCJfdGltZXN0YW1wIjoxNjQ5NjcyNTQ4LjI2NTE0NiwiZXhwaXJlZF90aW1lXyI6MTY1MjIwOTIwMCwidmVyc2lvbl9rZXlfIjowLCJsYXRlc3RfdGltZXN0YW1wXyI6MTY1MTQ5NTAxOH0.s1ghpguJZewZcNQ7tnTNR7s6Z5JxdsUE7a4fv3Zz-U4; a2873925c34ecbd2_gr_cs1=sneaken; _ga=GA1.2.943126449.1641913598; _gat_gtag_UA_131851415_1=1') => {
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
        total += 1
        difficulty[item.difficulty.toLowerCase()]++
        if (index === arr.length - 1) {
          // 首次
          days[submission.timestamp].push(`[${item.frontendId}]`)
        } else {
          // 复习
          days[submission.timestamp].push(`[复习 ${item.frontendId}]`)
        }
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

getUserProfileQuestions().catch()


