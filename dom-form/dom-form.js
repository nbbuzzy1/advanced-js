const input = document.querySelector('#first-name');
input.addEventListener('input', (e) => {
  const select = document.querySelector('select');
  if (e.target.value == 'hi') {
    select.value = 'colorado'
  } else {
    select.value = 'ohio';
  }
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  for (const [key, val] of formData.entries()) {
    console.log(key, val);
  }
  console.log('I submitted the form', formProps);
})