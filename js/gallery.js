const searchBtn = document.getElementById("searchbot");
const displayHtml = document.querySelector(".allinfo");

const api = async (searchField) => {
  try {
    const apiEndpoint = ` yourapikey`;
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    alert("An error occurred while fetching data. Please try again later.");
    console.error(error);
    throw error;
  }
};

const showFoodImages = async (searchField) => {
  try {
    const images = await api(searchField);
    if (!images.meals) {
      alert("Sorry, we do not have this country food.😢");
      return;
    }
    const foodStuffs = images.meals
      .map((object) => {
        return `<div class="innerfood">
          <img class="toshow" src=${object.strMealThumb} alt="">
          <p class="foodname">${object.strMeal}</p>
        </div>`;
      })
      .join("");
    displayHtml.innerHTML = foodStuffs;
  } catch (error) {
    console.error(error);
  }
};

// Call showFoodImages function on page load to display American food
window.addEventListener("load", () => {
  showFoodImages("American");
});

searchBtn.addEventListener("click", () => {
  const searchField = document.getElementById("searchinput").value.trim();
  showFoodImages(searchField);
});

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
