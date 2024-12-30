import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router";
import { useSigninCheck } from 'reactfire';
import Login from './ui/views/login/Login';
import Layout from './ui/layout/Layout';
import AppLoading from './ui/components/appLoading/AppLoading';
import Overview from './ui/views/overview/Overview';
import './App.scss';

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
    return <AppLoading />;
  }

  return (
    <Suspense fallback={<AppLoading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/transactions" element={<h1>transactions</h1>} />
          <Route path="/budgets" element={<h1>Budgets</h1>} />
          <Route path="/pots" element={<h1>Pots</h1>} />
          <Route path="/recurring-bills" element={<h1>Recurring Bills</h1>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
