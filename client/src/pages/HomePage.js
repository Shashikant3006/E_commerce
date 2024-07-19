
import React from 'react';
import Layout from '../components/Layout/layout';
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  const pageStyle = {
    background: 'linear-gradient(to right,  rgb(180, 220, 225), rgb(289, 289, 289))',
    // minHeight: '100vh', // Ensure it covers the full viewport height
  };

  return (
    
      <Layout title={'Shop now'}>
        <h1>Home</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
    
  );
};

export default HomePage;