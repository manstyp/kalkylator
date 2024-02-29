const express = require("express");
const app = express();
const pug = require("pug");
const axios = require("axios");

const PORT = 3000;
const API_KEY = "55a630fbe6f943c3887e45cc4c740a8a";

app.set("view engine", "pug");

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&`
    );
    const euroRate = response.data.rates.EUR;
    const sekRate = response.data.rates.SEK;
    const dollarRate = response.data.rates.USD;

    res.render("index", { euroRate, sekRate, dollarRate });
  } catch (error) {
    res.status(400).send("Internal server error");
  }
});
