const request = require("request");

const args = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search/?q=${args[0]}`,
  (error, response, body) => {
    const data = JSON.parse(body);
    if (error) console.log(error);
    if (data[0] !== undefined) {
      console.log(data[0].description);
    }
    console.log("Breed not found.");
  }
);
