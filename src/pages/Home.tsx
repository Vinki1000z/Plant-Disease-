import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero onAnalyzeClick={() => navigate('/ai-engine')} />
      <Features />
    </div>
  );
};

export default Home;