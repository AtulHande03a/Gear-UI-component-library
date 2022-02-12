const addToCartBtn = document.querySelector(".card-addtocart");
const card = document.querySelector(".card-verticle");

card.addEventListener("mouseover", () => {
  addToCartBtn.style.opacity = 1;
});

card.addEventListener("mouseleave", () => {
  setTimeout(() => {
    addToCartBtn.style.opacity = 0;
  }, 1000);
});
