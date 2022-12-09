let productList = document.querySelector(".product-list");
let cart = document.querySelector(".cart");
let addedProduct = [];
productList.addEventListener("click", function (e) {
  if (e.target.hasAttribute("href")) {
    addToCart(e.target.parentElement.getAttribute("id"));
  }
});
cart.addEventListener("click", removeProduct);
function addToCart(product) {
  if (addedProduct.indexOf(product) === -1) {
    let li = document.createElement("li");
    li.setAttribute("id", product);
    li.innerHTML = `${
      product[0].toUpperCase() + product.slice(1)
    } <a href="#">Remove</a>`;
    cart.appendChild(li);
    addedProduct.push(product);
  }
}
function removeProduct(e) {
  if (e.target.hasAttribute("href")) {
    let product = e.target.parentElement.getAttribute("id");
    let parentProduct = e.target.parentElement;

    addedProduct = addedProduct.filter((pr) => pr !== product);
    parentProduct.remove();
  }
}
