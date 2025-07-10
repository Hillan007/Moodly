import React from 'react';
import Mascot from '../components/Mascot';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">Welcome to Moodly!</h1>
      <p className="mb-8 text-lg text-gray-700">Track your mood, journal, and get gentle self-care nudges.</p>
      <Mascot mood="happy" />
    </div>
  );
};

export default Home;