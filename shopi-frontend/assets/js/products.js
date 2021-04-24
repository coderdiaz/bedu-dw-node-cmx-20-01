const token = window.localStorage.getItem('token');

if (!token) {
  window.localStorage.clear();
  window.location = "/";
}

const renderProducts = (products) => {
  const element = document.getElementById('product-list');

  const list = products.map(product => {
    return `<div class="p-3">
      <div class="relative"></div>
      <div class="relative px-2">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="inline-block">$ ${product.price}</span>
      </div>
    </div>`;
  });

  element.innerHTML = list.join();
} 

fetch('http://localhost:3001/api/products', {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token,
  }
})
.then(response => response.json())
.then(response => {
  renderProducts(response.data);
}).catch(err => {
  console.error(err);
})