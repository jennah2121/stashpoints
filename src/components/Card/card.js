import React from 'react';
import styled from 'styled-components';

const Card = ({ stashPoint }) => {
  return <li>{stashPoint.name}</li>;
};

export default Card;
