const alertExampleMessage = document.querySelector("#alert-close-example");
const alertCloseBtn = document.querySelector("#alert-close-btn");
const resetBtn = document.querySelector(".reset-btn");

const closeMessage = () => {
  alertExampleMessage.style.display = "none";
};

const showAlert = () => {
  alertExampleMessage.style.display = "flex";
};

alertCloseBtn.addEventListener("click", closeMessage);
resetBtn.addEventListener("click", showAlert);
