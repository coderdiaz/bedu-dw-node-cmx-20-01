const form = document.getElementById('form-login');

// console.log(form);
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // console.log(form.elements);
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  console.log(email, password);

  fetch('http://localhost:3001/api/auth/login', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    window.localStorage.setItem('token', data.token);
    window.location = "/dashboard/products.html";
  }).catch(err => {
    console.error(err);
  })
});