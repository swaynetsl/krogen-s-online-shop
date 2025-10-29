const sheetURL ="https://docs.google.com/spreadsheets/d/1IHc5cO8xXXZ1-lPjuX6wilNvkTJ2SEh61C2aZ8FknsQ/edit?usp=sharing"
const productsDiv = document.getElementById("products")

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").slice(1);
    rows.forEach(row => {
      const cols = row.split(",");
      const product = {
        id: cols[0],
        name: cols[1],
        price: cols[2],
        image: cols[3]
      };
      displayProduct(product);
    });
  })
  .catch(error => {
    console.error("Error fetching product data:", error);
  });
