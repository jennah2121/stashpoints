import React from 'react';
import styled from 'styled-components';
import Card from '../Card/card.js';

const StyledUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 2rem;
  padding: 1rem 1.4rem;
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
