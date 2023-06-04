

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const projectRenderer = new ProjectRenderer();
const mainProjectParentElement = document.querySelector(
  ".container-main-project"
);
const otherProjectsParentElement = document.querySelector(".js-projects");
const projectId = getParameterByName("id");

projectRenderer.fetchProjects(
  mainProjectParentElement,
  createMainProjectElement,
  projectId,
  false
);

projectRenderer.fetchProjects(
  otherProjectsParentElement,
  createOtherProjectsElement,
  projectId,
  true
);

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