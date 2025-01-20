const axios = require("axios");
const fs = require("fs");

async function newSearch(userName, userLocation) {
  let search;

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: userLocation },
    headers: {
      "x-rapidapi-key": "a2349951femshcdddfdb4d9b307dp1cb439jsnc0489291cb80",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };
  let temperature;
  try {
    const response = await axios.request(options);
    temperature = response.data.current.temp_c;
  } catch (error) {
    console.error("request failed: ", error);
    process.exit();
  }
  const date = new Date();

  let reqDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  if (temperature != undefined && userName != undefined) {
    search = `{"username": "${userName}", "userLocation": "${userLocation}", "temperature": "${temperature}°C", "requestDate": "${reqDate}"}=\n`;
  }

  fs.appendFileSync("./log.txt", search);

  console.log("search added to log.txt");
}

module.exports = newSearch;
