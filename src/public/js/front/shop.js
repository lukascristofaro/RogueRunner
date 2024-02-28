const products = [
  {
    title: "Product 1",
    description: "Description for Product 1",
  },
  {
    title: "Product 2",
    description: "Description for Product 2",
  },
  {
    title: "Product 3",
    description: "Description for Product 3",
  },
];
function displayProducts() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  products.forEach((product) => {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h1");
    title.id = "Title";
    title.textContent = `Title: ${product.title}`;

    const description = document.createElement("p");
    description.id = "description";
    description.textContent = `Description: ${product.description}`;

    const buyButton = document.createElement("button");
    buyButton.id = "buy";
    buyButton.textContent = "buy";
    buyButton.addEventListener("click", () => {
      alert(`You bought ${product.title}`);
    });
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(buyButton);
    container.appendChild(box);
  });
}
displayProducts();
