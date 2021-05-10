const fetch = require("node-fetch");

fetch("https://geocode.xyz/Raleigh?json=1")
  .then((response) => {
    console.log("data found", response);
    // handle response data
  })
  .catch((err) => {
    consolee.log("data not retrieved", err);
    // handle errors
  });
  async function getCoord(city) {
    const response = await fetch(`https://geocode.xyz/${city}?json=1`);
    const cityData = await response.json();
   // more code to parse the latitude/longitude here
}