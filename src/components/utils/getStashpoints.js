//The endpoint for all queries to the CityStasher API
const baseUrl = 'https://api-staging.stasher.com/v1/stashpoints';

// Makes a request to the CityStasher API
export const getStashpoints = stateObj => {
  const url = 'city=london';
  return fetch(`${baseUrl}?${url}`)
    .then(checkStatus)
    .catch(error => {
      console.log('An error occurred with Fetch');
      throw new Error(`fetch getUserData failed ${error}`);
    });
};

/**
 * Handle non 200 response status from fetch
 */
const checkStatus = response => {
  if (response.status != 200) {
    console.log(
      `Error - Non 200 status code. Status code is ${response.status}`
    );
    return 'fetch error';
  }

  return response.json();
};
