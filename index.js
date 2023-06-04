document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector("#loader");
    const menu = document.querySelector(".menu");
  
    function showLoader() {
      loader.classList.remove("hidden");
    }
  
    function hideLoader() {
      loader.classList.add("hidden");
      menu.style.visibility = "visible";
    }
  
    showLoader();
  
    setTimeout(hideLoader, 800);
  });
  
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