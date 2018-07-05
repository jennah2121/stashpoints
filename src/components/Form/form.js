import React from 'react';

const Form = props => {
  const { city, hotel, tourist_information_centre } = props.values;
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="city">City </label>
      <input
        id="city"
        placeholder="Enter a city"
        value={city}
        type="text"
        onChange={props.handleChange}
        required
      />
      <label htmlFor="hotel">Hotels</label>
      <input
        id="hotel"
        type="checkbox"
        checked={hotel}
        onChange={props.handleChange}
      />
      <label htmlFor="tourist_information_centre">
        Tourist Information Centre
      </label>
      <input
        id="tourist_information_centre"
        type="checkbox"
        checked={tourist_information_centre}
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
