import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  background-color: #fff;
  min-height: 380px;
  width: 100%;
  max-width: 320px;
  margin: auto;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 #dde1df, 0 6px 20px 0 #dde1df;
  border-radius: 9px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const Card = ({ stashPoint }) => {
  return (
    <StyledLi>
      <p>{stashPoint.name}</p>
      <StyledImg src={stashPoint.photos[0]} alt={stashPoint.name} />
      <p>
        Address: {stashPoint.address}, {stashPoint.postal_code}
      </p>
    </StyledLi>
  );
};

export default Card;
