let foodCategory = "American";
let apiEndpoint = " yourapikey";

const foodSection = document.querySelector(".allinfo");
let pictures = [];
let count = 0;

const api = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};

window.addEventListener("DOMContentLoaded", async () => {
  await showFoodImages();
});

const showFoodImages = async () => {
  const images = await api(apiEndpoint);
  pictures = images.meals.map((meal) => meal.strMealThumb);
  showNextImage();
};

const showNextImage = () => {
  const pic = document.querySelector("#food1");
  const pic2 = document.querySelector("#food2");
  pic.src = pictures[count];
  pic2.src = pictures[(count + 1) % pictures.length];
};

const navigate = (direction) => {
  if (direction === "next") {
    count = (count + 1) % pictures.length;
  } else if (direction === "prev") {
    count = (count - 1 + pictures.length) % pictures.length;
  }
  showNextImage();
};

const Nxt = document.getElementById("next");
const phoneNxt = document.getElementById("nxt3");
const Prev = document.getElementById("prev");

Nxt.addEventListener("click", () => navigate("next"));
phoneNxt.addEventListener("click", () => navigate("next"));
Prev.addEventListener("click", () => navigate("prev"));

const mainFood = async () => {
  const foods = await api(apiEndpoint);
  const foodItems = foods.meals
    .map((object) => `<img class="toshow" src=${object.strMealThumb} alt="">`)
    .join("");
  foodSection.innerHTML = foodItems;
};
mainFood();

const toggleButton = document.querySelector(".menu");
const links = document.querySelector(".navbars");
toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
// Function to show the back to top button
function showBackToTopButton() {
  var backToTopButton = document.getElementById("backToTopBtn");
  if (window.pageYOffset > 300) {
    // Adjust the scroll threshold as needed
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Function to scroll back to top smoothly
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listener for scroll event to show/hide back to top button
window.addEventListener("scroll", showBackToTopButton);
