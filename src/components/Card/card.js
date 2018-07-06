import React from 'react';

const Card = ({ stashPoints }) => {
  return (
    <ul>
      {stashPoints.map(stashPoint => (
        <li key={stashPoint.id}>{stashPoint.name}</li>
      ))}
    </ul>
  );
};

export default Card;
