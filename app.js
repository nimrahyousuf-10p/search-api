const express = require("express");
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "de3741f14d58f96507b5fb7dbdda52445b1d449b3895b99610bbb6f53d667530"
);

const app = express();

app.use(express.json());

app.use("/search", (req, res) => {
  console.log();
  const query = req.query.q || "";
  // const params = {
  //   q: "Coffee",
  // };
  const params = {
    engine: "google",
    q: query,
    // tbm: "nws",
    //   location: "Dallas",
  };

  const callback = function (data) {
    console.log(data["organic_results"]);
    res.send(data["organic_results"]);
  };

  // Show result as JSON
  search.json(params, callback);
});
app.use("/news", (req, res) => {
  console.log();
  const query = req.query.q || "";
  // const params = {
  //   q: "Coffee",
  // };
  const params = {
    q: query,
    tbm: "nws",
    //   location: "Dallas",
  };

  const callback = function (data) {
    console.log(data["news_results"]);
    res.send(data["news_results"]);
  };

  // Show result as JSON
  search.json(params, callback);
});
module.exports = app;
