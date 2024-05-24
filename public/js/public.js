document.addEventListener("DOMContentLoaded", function () {
  const euroForm = document.querySelector("#euroForm");
  const usdForm = document.querySelector("#usdForm");
  const usdBtn = document.querySelector("#usdBtn");
  const euroBtn = document.querySelector("#euroBtn");
  const euroRate = document.querySelector("#euroRate");
  const usdRate = document.querySelector("#usdRate");
  const inputEuro = document.querySelector("#inputEuro").innerText;
  const inputUsd = document.querySelector("#inputUsd").innerText;
  const euroSek = document.querySelector("#euroSek");
  const usdSek = document.querySelector("#usdSek");
  const TB27Element = document.getElementById("TB27");
  const euroTB27Element = document.getElementById("euroTB27");
  const usdTB27Element = document.getElementById("usdTB27");
  const TB30Element = document.getElementById("TB30");
  const euroTB30Element = document.getElementById("euroTB30");
  const usdTB30Element = document.getElementById("usdTB30");
  const TB35Element = document.getElementById("TB35");
  const euroTB35Element = document.getElementById("euroTB35");
  const usdTB35Element = document.getElementById("usdTB35");
  const TB40Element = document.getElementById("TB40");
  const euroTB40Element = document.getElementById("euroTB40");
  const usdTB40Element = document.getElementById("usdTB40");

  if (!isNaN(inputEuro)) {
    //om euro finns
    euroForm.classList.remove("hidden");
    usdForm.classList.add("hidden");
    euroRate.classList.remove("hidden");
    usdRate.classList.add("hidden");
    euroSek.classList.remove("hidden");
    TB27Element.classList.remove("hidden");
    euroTB27Element.classList.remove("hidden");
    TB30Element.classList.remove("hidden");
    euroTB30Element.classList.remove("hidden");
    TB35Element.classList.remove("hidden");
    euroTB35Element.classList.remove("hidden");
    TB40Element.classList.remove("hidden");
    euroTB40Element.classList.remove("hidden");
  } else {
    //om usd finns
    usdForm.classList.remove("hidden");
    euroForm.classList.add("hidden");
    usdRate.classList.remove("hidden");
    euroRate.classList.add("hidden");
    usdSek.classList.remove("hidden");
    TB27Element.classList.remove("hidden");
    usdTB27Element.classList.remove("hidden");
    TB30Element.classList.remove("hidden");
    usdTB30Element.classList.remove("hidden");
    TB35Element.classList.remove("hidden");
    usdTB35Element.classList.remove("hidden");
    TB40Element.classList.remove("hidden");
    usdTB40Element.classList.remove("hidden");
  }

  euroBtn.addEventListener("click", function () {
    euroForm.classList.remove("hidden");
    usdForm.classList.add("hidden");
    usdRate.classList.add("hidden");
  });

  usdBtn.addEventListener("click", function () {
    usdForm.classList.remove("hidden");
    euroForm.classList.add("hidden");
    euroRate.classList.add("hidden");
  });
});
