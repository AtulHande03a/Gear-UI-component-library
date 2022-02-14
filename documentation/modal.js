const closeModalBtn = document.querySelector("#modal-close-btn");
const modalContainer = document.querySelector("#modal-container");
const alertClosedBtn = document.querySelector("#alert-closed-btn");
const resetModalBtn = document.querySelector("#reset-modal");
const modalActive = document.querySelector("#modal-active");

const hideModal = () => {
  console.log("clicked");
  modalContainer.classList.add("hide");
  modalActive.classList.add("hide");
};

const showModal = () => {
  if (
    modalContainer.classList.contains("hide") &&
    modalActive.classList.contains("hide")
  ) {
    modalContainer.classList.remove("hide");
    modalActive.classList.remove("hide");
  }
};

closeModalBtn.addEventListener("click", hideModal);
alertClosedBtn.addEventListener("click", hideModal);

resetModalBtn.addEventListener("click", showModal);
