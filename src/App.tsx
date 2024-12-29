import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router";
import { useSigninCheck } from 'reactfire';
import './App.scss';
import Login from './ui/views/login/Login';

const App: React.FC = () => {

  const navigate = useNavigate();

  const { status, data: signInCheckResult } = useSigninCheck();

  useEffect(() => {
    if (signInCheckResult && signInCheckResult.signedIn === true) {
      navigate('/');
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInCheckResult]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
