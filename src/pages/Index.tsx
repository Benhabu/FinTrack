
import React from 'react';
import LandingPage from './LandingPage';
import Navbar from '@/components/Navbar';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Index;
