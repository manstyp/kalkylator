const express = require("express");
const app = express();
const pug = require("pug");
const axios = require("axios");
const path = require("path");
const viewsDirectory = path.join(process.cwd(), "views");

const PORT = 3000;
const API_KEY = "0DJ7QeQRTFlRBOU2lxA9";

let euroRate;
let usdRate;
let globalInputEuro;

app.set("views", viewsDirectory);
app.set("view engine", "pug");
app.set("public", path.join(__dirname, "public"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const responseEuro = await axios.get(
      `https://marketdata.tradermade.com/api/v1/live?currency=EURSEK&api_key=${API_KEY}`
    );

    const responseUSD = await axios.get(
      `https://marketdata.tradermade.com/api/v1/live?currency=USDSEK&api_key=${API_KEY}`
    );
    usdRate = responseUSD.data.quotes[0].ask;
    euroRate = responseEuro.data.quotes[0].ask;

    inputEuro = req.query.euroInput;
    inputUsd = req.query.usdInput;
    globalInputEuro = inputEuro;

    console.log(euroRate, usdRate);
    res.render("index", {
      euroRate,
      usdRate,
      inputEuro,
      inputUsd,
    });
  } catch (error) {
    res.status(400).send("Internal server error");
  }
});
