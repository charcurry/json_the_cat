const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      callback(error, undefined);
    } else if (error === null) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, null);
      } else {
        callback(null, data[0]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

