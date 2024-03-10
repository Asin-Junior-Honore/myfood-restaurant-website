const searchBtn = document.getElementById("searchbot");
const displayHtml = document.querySelector(".allinfo");

const api = async () => {
  try {
    const searchField = document.getElementById("searchinput").value.trim();
    const apiEndpoint = `your -api-endpoint/${searchField}`;
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    alert("An error occurred while fetching data. Please try again later.");
    console.error(error);
    throw error;
  }
};

const showFoodImages = async () => {
  try {
    const images = await api();
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

searchBtn.addEventListener("click", showFoodImages);
const toggleButton = document.querySelector(".menu");
const links = document.querySelector(".navbars");
toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
});
