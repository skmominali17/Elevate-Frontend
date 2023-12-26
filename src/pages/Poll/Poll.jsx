import React from 'react';
import './Poll.css';

const Poll = () => {
  return (
    <div className="container mx-auto h-screen w-screen bg-slate-300">
      <div className="text-div">
        <h2>This is the poll question</h2>
        <p>Select an option:</p>
      </div>
      <div className="button-container">
        <button className="poll-button">Option 1</button>
        <button className="poll-button">Option 2</button>
        <button className="poll-button">Option 3</button>
        <button className="poll-button">Option 4</button>
      </div>
    </div>
  );
};

export default Poll;
