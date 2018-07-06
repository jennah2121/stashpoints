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

const Card = ({ name, photos, address, postal_code, pricing_structure }) => {
  return (
    <StyledLi>
      <p>{name}</p>
      <StyledImg src={photos[0]} alt={name} />
      <p>
        Address: {address}, {postal_code}
      </p>
      <p>
        First Day Price: {pricing_structure.first_day_cost},{' '}
        {pricing_structure.ccy}
      </p>
      <p>
        Extra Day Price: {pricing_structure.extra_day_cost},{' '}
        {pricing_structure.ccy}
      </p>
    </StyledLi>
  );
};

export default Card;
