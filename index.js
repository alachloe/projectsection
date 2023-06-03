function scrollImages() {
    const container = document.getElementById('brands');
    const imgCols = container.getElementsByClassName('brand-logo');
    const images = Array.from(brandlogo).map((brandlogo) => brand-logo.firstElementChild);
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
const scrollTopFunc = () => {
    const d = document;
    const w = window;
    let button = document.querySelector(".scroll-top-btn");
    w.addEventListener("scroll", () => {
      let scrollTop = d.documentElement.scrollTop;
  
      if (scrollTop > 120) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
      }
    });
  };
  scrollTopFunc();