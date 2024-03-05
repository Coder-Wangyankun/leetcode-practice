
import { getQuestionDetail } from "./getQuestionDetail.js";
const bodyString = "{\"query\":\"\\n    query studyPlanPastSolved($slug: String!) {\\n  studyPlanV2Detail(planSlug: $slug) {\\n    planSubGroups {\\n      slug\\n      questions {\\n        titleSlug\\n        status\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"slug\":\"top-100-liked\"},\"operationName\":\"studyPlanPastSolved\"}"
const headers = {
  "accept": "*/*",
  "accept-language": "zh-CN,zh;q=0.9",
  "authorization": "",
  "baggage": "sentry-environment=production,sentry-release=73ff3382,sentry-transaction=%2Fstudyplan%2F%5Bslug%5D,sentry-public_key=1595090ae2f831f9e65978be5851f865,sentry-trace_id=fb4ee8c44d4c4ef1af42931651aff8af,sentry-sample_rate=0.03",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "pragma": "no-cache",
  "random-uuid": "a0c58cb4-b0ae-2b86-da8f-2f033b2e5f4c",
  "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "sentry-trace": "fb4ee8c44d4c4ef1af42931651aff8af-b30f909d0ec76eb2-0",
  "uuuserid": "5ff98955d0a418b1166edabc9bf991bf",
  "x-csrftoken": "kO0V1aWwaLzS33cOl0FEzDtJoFhP5cn14bPSmTd04LAqWFUtoOWe79psjhyQDaU0",
  "cookie": "gr_user_id=25df956c-444d-4d2e-a152-5803cf43b17b; a2873925c34ecbd2_gr_last_sent_cs1=hedwig; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1706181401; csrftoken=kO0V1aWwaLzS33cOl0FEzDtJoFhP5cn14bPSmTd04LAqWFUtoOWe79psjhyQDaU0; tfstk=eEb6jA0mbtQUqiiidRNFOdPx2JYbTOazCjOAZs3ZMFLTGq6PwNJan5jBh993sNyM7qIfZsv9uF7ali9pWnjw3dJXlsX7T8zzz1fMoFezUz-TYqbwk6lEK-CGsEcHFRxa310b99CFmSzYe0qciDiZjqQNFoo8IpVC-Ct6hqJZlT7EzH9-xpu-ydO6fD19dq3ARgzxzLitamGBqqOBUWNImmAOBu2RnXQe0hdH6zPQOv7mEq3lYWNImrK9tCeUOWMFo; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1706799066,1707460689,1709211995; a2873925c34ecbd2_gr_session_id=3b870d67-945e-4d2b-8677-f4d1d22026b4; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=3b870d67-945e-4d2b-8677-f4d1d22026b4; a2873925c34ecbd2_gr_session_id_sent_vst=3b870d67-945e-4d2b-8677-f4d1d22026b4; _gid=GA1.2.306731879.1709212001; __appToken__=; _bl_uid=9klkvt9O7g38ptpq6bOLln7rOCa8; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiODYxNzkiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjYzNjMwOTJiYmI1OTc0NDg4Yjc0ZWYxNmY5MTNlYTIyYzNhZjNjYjQ1MjhmMTUwYzg4MGY1ZjUxZWVkMWRiZjUiLCJpZCI6ODYxNzksImVtYWlsIjoiIiwidXNlcm5hbWUiOiJIZWR3aWciLCJ1c2VyX3NsdWciOiJoZWR3aWciLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jbi9hbGl5dW4tbGMtdXBsb2FkL2RlZmF1bHRfYXZhdGFyLnBuZyIsInBob25lX3ZlcmlmaWVkIjp0cnVlLCJfdGltZXN0YW1wIjoxNzA3MDQ0MDcyLjUxNzE4NSwiZXhwaXJlZF90aW1lXyI6MTcwOTU3ODgwMCwidmVyc2lvbl9rZXlfIjowLCJsYXRlc3RfdGltZXN0YW1wXyI6MTcwOTIxMjU0OX0.CJcrIzfvp5oEcD7_c4PqqSfFsKUyO3wVSybM0BBLQXo; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1709213405; a2873925c34ecbd2_gr_cs1=hedwig; _ga=GA1.1.1965599365.1672653755; _ga_PDVPZYN3CW=GS1.1.1709211996.99.1.1709213409.28.0.0",
  "Referer": "https://leetcode.cn/studyplan/top-100-liked/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}


const initJson = {
  headers,
  body: bodyString,
  method: "POST"

}
export  const getHot100QuestionList = async() => {
 const res =  await fetch("https://leetcode.cn/graphql/", initJson).then(res=> res.json())
 const { data: {
  studyPlanV2Detail
 } } = res;
 return studyPlanV2Detail
}

export const getTitleSlugList = async () => {
  const res = await getHot100QuestionList();
  const {planSubGroups} = res;
  return planSubGroups.reduce((acc, cur)=> {
   const list = cur.questions.map(res=> res.titleSlug);
  //  acc.push(...list);
    acc.push(...cur.questions.map(res=> res.titleSlug))
    return acc
  }, [])
}
const getPromiseList = async() => {
  const titleSlugList = await getTitleSlugList();
  return titleSlugList.map((titleSlug) =>  getQuestionDetail(titleSlug))

}

export  async function  getHot100QuestionListJSCode () {
  const promiseList = await getPromiseList();
  return await Promise.all(promiseList)
}

(async function() {
  const slugs = await getHot100QuestionListJSCode();  
  
  console.log(slugs)

})()