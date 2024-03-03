document.addEventListener("DOMContentLoaded", function () {
  const euroForm = document.querySelector("#euroForm");
  const usdForm = document.querySelector("#usdForm");
  const usdBtn = document.querySelector("#usdBtn");
  const euroBtn = document.querySelector("#euroBtn");
  const euroRate = document.querySelector("#euroRate");
  const usdRate = document.querySelector("#usdRate");
  const inputEuro = document.querySelector("#inputEuro").innerText;
  const inputUsd = document.querySelector("#inputUsd").innerText;

  if (!isNaN(inputEuro)) {
    euroForm.classList.remove("hidden");
    usdForm.classList.add("hidden");
    euroRate.classList.remove("hidden");
    usdRate.classList.add("hidden");
  } else {
    usdForm.classList.remove("hidden");
    euroForm.classList.add("hidden");
    usdRate.classList.remove("hidden");
    euroRate.classList.add("hidden");
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
