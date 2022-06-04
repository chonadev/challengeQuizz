export const getToken = () => {
  let token = null;

  try {
    const authString = window.localStorage.getItem('token');
    token = JSON.parse(authString).token;
  } catch(e) {
    return null;
  }

  return token;
};

export const isAutenticated = () => {
  const isAuth = getToken();
  return isAuth ? true : false ;
}