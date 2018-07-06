//The endpoint for all queries to the CityStasher API
const baseUrl = 'https://api-staging.stasher.com/v1/stashpoints';

// Makes a request to the CityStasher API
export const getStashpoints = stateObj => {
  const url = buildUrl(stateObj);
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

/**
 * Builds the url
 * Takes in the original state object from App which is altered by groupTypes()
 */
const buildUrl = stateObj => {
  const queryParams = groupTypes(stateObj);
  let url = [];

  for (let key in queryParams) {
    url.push(key, '=', queryParams[key], '&');
  }

  //Remove the additional '&' and whitespace
  url.pop();
  url = url.join('');

  return url;
};

/**
 * Creates a new obj where all of the types are grouped together in one property
 * Properties which are not needed for the fetch query are removed
 */
const groupTypes = stateObj => {
  delete stateObj.stashPoints;
  const allTypes = ['hotel', 'tourist_information_centre'];

  let queryParams = { type: [] };

  for (let key in stateObj) {
    if (allTypes.includes(key)) {
      if (stateObj[key] === true) queryParams.type.push(key);
    } else {
      queryParams[key] = stateObj[key];
    }
  }

  if (queryParams.type.length > 0) {
    queryParams.type = queryParams.type.join(',');
  } else {
    delete queryParams.type;
  }

  return queryParams;
};
