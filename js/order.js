function showBackToTopButton() {
  var backToTopButton = document.getElementById("backToTopBtn");
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", showBackToTopButton);

let toggleButton = document.querySelector(".menu");
let links = document.querySelector(".navbars");
// console.log(togglebutton, links)
toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
