import React, { useState } from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {

  const [visibleNamePage, setVisibleNamePage] = useState('Login');

  return (
    <>
      { 'Login' === visibleNamePage && <Login goTo={setVisibleNamePage} />}
      { 'Register' === visibleNamePage && <Register goTo={setVisibleNamePage} />}
    </>
  );
}

export default App;
