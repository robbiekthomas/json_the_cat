const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`,
    (error, _, body) => {
      const data = JSON.parse(body);
      if (error) {
        return callback(error);
      }
      if (data[0] !== undefined) {
        return callback(null, data[0].description);
      }
      callback("Breed not found", null);
    }
  );
};

module.exports = { fetchBreedDescription };
