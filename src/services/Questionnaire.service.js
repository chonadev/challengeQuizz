
const urlBase = `${process.env.REACT_APP_API_URL}/questionnaire`;

export const fetchQuestionnaires = async() => {
  let res = await fetch(urlBase, { method: "GET", headers: {} });
  
  res = await res.json();
  
  return res.result;
}