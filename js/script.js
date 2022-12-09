let productList = document.querySelector(".product-list");
let cart = document.querySelector(".cart");
let addedProduct = [];
productList.addEventListener("click", function (e) {
  if (e.target.hasAttribute("href")) {
    addToCart(e.target.parentElement.getAttribute("id"));
  }
});
cart.addEventListener("click", removeProduct);
