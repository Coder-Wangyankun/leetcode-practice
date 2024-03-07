

import { createQuestionByTitleSlug } from "../create-check/createUtil.js";
import path from "path";
const bodyString = "{\"query\":\"\\n    query studyPlanPastSolved($slug: String!) {\\n  studyPlanV2Detail(planSlug: $slug) {\\n    planSubGroups {\\n      slug\\n      questions {\\n        titleSlug\\n        status\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"slug\":\"top-100-liked\"},\"operationName\":\"studyPlanPastSolved\"}"
const headers = {
  "content-type": "application/json",
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
  const dir = path.join(process.cwd(), 'hot100')
  return titleSlugList.map((titleSlug) =>  createQuestionByTitleSlug(titleSlug,dir))

}

export  async function  getHot100QuestionListJSCode () {
  const promiseList = await getPromiseList();
  // await promiseList[1]

  return await Promise.all(promiseList)
}
