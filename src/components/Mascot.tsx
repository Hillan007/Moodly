import React from 'react';

interface MascotProps {
  mood: 'happy' | 'sad' | 'neutral';
}

const moodEmoji: Record<string, string> = {
  happy: '😊',
  sad: '😢',
  neutral: '😐',
};

const Mascot: React.FC<MascotProps> = ({ mood }) => (
  <div className="text-7xl">
    <span role="img" aria-label={mood}>{moodEmoji[mood]}</span>
    <div className="mt-2 text-xl text-gray-600">Moodly is feeling {mood}!</div>
  </div>
);

export default Mascot;