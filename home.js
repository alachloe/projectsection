function scrollImages() {
  const container = document.getElementById('brands');
  const imgCols = container.getElementsByClassName('brands-logo');
  const images = Array.from(brandslogo).map((brandslogo) => brandslogo.firstElementChild);

  let scrollPosition = container.scrollLeft;
  const containerWidth = container.offsetWidth;
  const totalWidth = container.scrollWidth;

  function loop() {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth - containerWidth) {
          scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(loop);
  }

  loop();
}

scrollImages();
  
  const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  console.log(scrollToTopBtn);
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
      console.log("scrolling");
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