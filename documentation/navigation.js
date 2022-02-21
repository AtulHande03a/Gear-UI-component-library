const hamburgerBtn = document.querySelector(".nav-hamburger-icon");
const hamburgerList = document.querySelector(".hamburger-list");

const toggleList = () => {
  if (hamburgerList.classList.contains("hide")) {
    hamburgerList.classList.remove("hide");
  } else {
    hamburgerList.classList.add("hide");
  }
};

hamburgerBtn.addEventListener("click", toggleList);
