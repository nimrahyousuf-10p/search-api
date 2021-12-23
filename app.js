const express = require("express");
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "de3741f14d58f96507b5fb7dbdda52445b1d449b3895b99610bbb6f53d667530"
);

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  // const params = {
  //   engine: "google",
  //   q: "Coffee",
  // };
  const params = {
    q: "pakistan",
    tbm: "nws",
    //   location: "Dallas",
  };

  const callback = function (data) {
    console.log(data["news_results"]);
  };

  // Show result as JSON
  search.json(params, callback);
});
module.exports = app;
