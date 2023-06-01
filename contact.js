const form = document.getElementById('contactus');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  
  fetch('https://jsonplaceholder.typicode.com/posts'
  , {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Votre message a bien été envoyé.');
      form.reset();
    } else {
      throw new Error('Une erreur est survenue.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Une erreur est survenue. Veuillez réessayer ultérieurement.');
  });
});


