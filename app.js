const adviceNum = document.getElementById("advice");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault;
  fetch("	https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceNum.textContent = `Advice # ${data.slip.id}`;
      quote.innerHTML = data.slip.advice;
    });
});
