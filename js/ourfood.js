const apiEndpoint = " your -api-endpoint "; // Replace with the API
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
});
