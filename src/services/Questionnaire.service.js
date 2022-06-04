import { getToken } from "./Utils";

const urlBase = `${process.env.REACT_APP_API_URL}/questionnaire`;

async function fetchQuestionnaires() {
  let res = await fetch(urlBase, { method: "GET", headers: {
    'contentType': 'application/json',
    'Authorization' : `Bearer ${getToken()}`
  } });
  
  res = await res.json();
  
  return res.result;
}

export default fetchQuestionnaires;