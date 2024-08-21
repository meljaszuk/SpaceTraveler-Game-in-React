import React from 'react';
import { Meteor } from './components/Meteor';
import { Background } from './components/Background';

export const App: React.FC = () => {
  console.log('app');
  return (
    <div>
      <Background />
      <Meteor />
    </div>
  );
};
