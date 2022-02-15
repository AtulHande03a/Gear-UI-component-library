const toastContainer = document.querySelector("#toast-container");
const toastCloseBtn = document.querySelector("#toast-close-btn");
const showToastBtn = document.querySelector("#show-toast-btn");

const showToast = () => {
  if (toastContainer.classList.contains("hide")) {
    toastContainer.classList.remove("hide");
    toastContainer.classList.add("toast-container");

    setTimeout(() => {
      toastContainer.classList.add("hide");
    }, 2000);
  }
};

const removeToast = () => {
  toastContainer.classList.add("hide");
};

showToastBtn.addEventListener("click", showToast);
toastCloseBtn.addEventListener("click", removeToast);
