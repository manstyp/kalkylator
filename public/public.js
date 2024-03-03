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

  if (!isNaN(inputEuro)) {
    //om euro finns
    euroForm.classList.remove("hidden");
    usdForm.classList.add("hidden");
    euroRate.classList.remove("hidden");
    usdRate.classList.add("hidden");
    euroSek.classList.remove("hidden");
  } else {
    //om usd finns
    usdForm.classList.remove("hidden");
    euroForm.classList.add("hidden");
    usdRate.classList.remove("hidden");
    euroRate.classList.add("hidden");
    usdSek.classList.remove("hidden");
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
