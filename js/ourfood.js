const apiEndpoint =
  " yourapikey";
const displayContainer = document.querySelector(".foodpic");
let pictures = [];

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    throw error;
  }
};

const showFoodImages = async () => {
  try {
    const { meals } = await fetchData(apiEndpoint);
    if (!meals || meals.length === 0) {
      displayContainer.innerHTML = "<p>No images found.</p>";
      return;
    }
    const result = meals.slice(6, 10); // Slice the array to get a subset of images
    const newSet = result
      .map(({ strMealThumb, strMeal }) => {
        return `
        <div class="innerfood">
          <img class="pic-api" id="food1" src="${strMealThumb}" alt="">
          <p>${strMeal}</p>
        </div>
      `;
      })
      .join("");
    displayContainer.innerHTML = newSet;
  } catch (error) {
    console.error("An error occurred while displaying images:", error);
  }
};

showFoodImages();

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
