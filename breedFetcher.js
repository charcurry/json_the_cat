const args = process.argv.splice(2);
const request = require('request');
const breedFetcher = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      console.log(error);
    } else if (error === null) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log("error: Breed not found");
      } else {
        console.log(data[0]);
      }
    }
  });
};

breedFetcher(args[0]);