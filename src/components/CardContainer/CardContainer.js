import React from 'react';
import styled from 'styled-components';
import Card from '../Card/card.js';

const StyledUl = styled.ul`
  list-style-type: none;
`;

const CardContainer = ({ stashPoints }) => {
  return (
    <StyledUl>
      {stashPoints.map(stashPoint => (
        <Card key={stashPoint.id} stashPoint={stashPoint} />
      ))}
    </StyledUl>
  );
};

export default CardContainer;
