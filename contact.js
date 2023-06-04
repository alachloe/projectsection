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

  const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });
  
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

