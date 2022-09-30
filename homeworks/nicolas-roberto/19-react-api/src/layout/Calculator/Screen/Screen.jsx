import React from 'react';
import './Screen.css';
import ComputationScreen from './ComputationScreen/ComputationScreen.jsx';
import ResultScreen from './ResultScreen/ResultScreen.jsx';

export default function Screen() {
  return (
    <div className="screen">
      <ComputationScreen />
      <ResultScreen />
    </div>
  );
}
