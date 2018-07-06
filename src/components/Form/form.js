import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  border: solid 3px #dde1df;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1.5rem;
  margin: auto;
  box-sizing: border-box;
  border-radius: 11px;
`;

const StyledInput = styled.input`
  border-radius: 0.3rem;
  border: solid 1px #dde1df;
  padding-left: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
  height: 1.7rem;
`;

const CityLabel = styled.label`
  color: #333;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 0.7rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
`;

const CheckboxLabel = styled.label`
  color: #333;
  font-weight: 700;
  align-self: flex-start;
  margin-left: 0.7rem;
`;

const StyledButton = styled.button`
  width: fit-content;
  height: 38px;
  text-align: center;
  border: solid 2px;
  border-radius: 9px;
  text-transform: uppercase;
  color: white;
  background-color: #afb5c7;
  font-weight: 600;
  letter-spacing: 1.2px;
  padding: 8px;
  cursor: pointer;
  align-self: center;
`;

const Form = props => {
  const { city, hotel, tourist_information_centre } = props.values;
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <CityLabel htmlFor="city">City </CityLabel>
      <StyledInput
        id="city"
        placeholder="Enter a city"
        value={city}
        type="text"
        onChange={props.handleChange}
        required
      />
      <CheckboxContainer>
        <input
          id="hotel"
          type="checkbox"
          checked={hotel}
          onChange={props.handleChange}
        />
        <CheckboxLabel htmlFor="hotel">Hotels</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          id="tourist_information_centre"
          type="checkbox"
          checked={tourist_information_centre}
          onChange={props.handleChange}
        />
        <CheckboxLabel htmlFor="tourist_information_centre">
          Tourist Information Centre
        </CheckboxLabel>
      </CheckboxContainer>
      <StyledButton type="submit">pick a place</StyledButton>
    </StyledForm>
  );
};

export default Form;
