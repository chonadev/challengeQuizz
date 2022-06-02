
const urlBase = `${process.env.REACT_APP_API_URL}/auth`;

export const fetchLogin = async(credentials) => {
  let res = await fetch(`${urlBase}/login`, { method: "POST", headers: {}, body : JSON.stringify(credentials) });
  
  res = await res.json();
  
  return res.result;
}

export const fetchRegister = async(userData) => {
  let res = await fetch(`${urlBase}/register`, { method: "POST", headers: {}, body: JSON.stringify({ user : userData}) });
  
  res = await res.json();
  
  return res.result;
}