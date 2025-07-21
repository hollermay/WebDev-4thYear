let btn = document.getElementById("but");
let container = document.getElementById("card-container");
let div = document.getElementById("para");

btn.addEventListener("click", apiData);

async function apiData() {
  // Show loading text
  let heading = document.createElement("h1");
  heading.innerText = "Loading data...";
  div.appendChild(heading);

  // Fetch data
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  // Remove loading text
  div.removeChild(heading);

  const products = data.products;

  // Clear old cards if any
  container.innerHTML = "";

  // Create cards for each product
  products.map((product) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${product.id}. ${product.title}</h2>
      <p>${product.description}</p>
    `;

    container.appendChild(card);
  });
}

