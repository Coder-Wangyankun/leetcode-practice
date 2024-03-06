const bodyString = "{\"query\":\"\\n    query questionTitle($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    questionFrontendId\\n    title\\n    titleSlug\\n    isPaidOnly\\n    difficulty\\n    likes\\n    dislikes\\n    categoryTitle\\n  }\\n}\\n    \",\"variables\":{\"titleSlug\":\"two-sum\"},\"operationName\":\"questionTitle\"}";
const headers = {
  "content-type": "application/json",
}


const initJson = {
  headers,
  body: bodyString,
  method: "POST"

}

async function getQuestionIdBySlug() {
  const res = await fetch("https://leetcode.cn/graphql/", initJson).then(res=> res.json());
  const  { data: question} = res;
  console.log(question)
  return question

}

await getQuestionIdBySlug()