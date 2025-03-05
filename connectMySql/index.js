var axios = require("axios");

setInterval(() => {
  console.log("waiting...");
  axios.get("http://example.com/").then((res) => {
    console.log(res);
    process.exit();
  });
}, 1000);
