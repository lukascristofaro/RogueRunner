const products = {
  policecar: [
    {
      title: "Police Car 1",
      price: 9.99,
    },
    {
      title: "Police Car 2",
      price: 9.99,
    },
    {
      title: "Police Car 3",
      price: 9.99,
    },
  ],
  roguecar: [
    {
      title: "Rogue Car 1",
      price: 12.99,
    },
    {
      title: "Rogue Car 2",
      price: 12.99,
    },
    {
      title: "Rogue Car 3",
      price: 12.99,
    },
  ],
};

function displayProducts(category) {
  const container = document.querySelector(`.${category}`);
  container.innerHTML = "";

  products[category].forEach((product) => {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h1");
    title.id = "Title";
    title.textContent = `${product.title}`;

    const price = document.createElement("p");
    price.id = "price";
    price.textContent = `${product.price.toFixed(2)} $`;

    const buyButton = document.createElement("button");
    buyButton.id = "buy";
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", () => {
      alert(`You bought ${product.title} for $${product.price.toFixed(2)}`);
    });

    box.appendChild(title);
    box.appendChild(price);
    box.appendChild(buyButton);

    container.appendChild(box);
  });
}
displayProducts("policecar");
displayProducts("roguecar");
