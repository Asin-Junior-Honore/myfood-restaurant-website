let foodCategory = "American";
let apienpoint = "put your api url here";

let foodSection = document.querySelector(".allinfo");

let pictures = [];

let pic = document.querySelector("#food1");
let pic2 = document.querySelector("#food2");
let Nxt = document.getElementById("next");
let phoneNxt = document.getElementById("nxt3");
let Prev = document.getElementById("prev");
let count = 19;
const api = async () => {
  const res = await fetch(apienpoint);
  const data = await res.json();
  //   console.log(data)
  return data;
};

window.addEventListener("DOMContentLoaded", async () => {
  showfoodimages(count);
});

showfoodimages = async (Foods) => {
  images = await api();
  pictures = images.meals.map((meals) => meals.strMealThumb);
  //   console.log(pictures,pic2);
  pic2.src = pictures[(Foods, count--)];
  pic.src = pictures[(Foods, count++)];
};

Nxt.addEventListener("click", function () {
  count++;
  showfoodimages(count);
  if (count > pictures.length - 1) {
    count = 0;
  }
});

phoneNxt.addEventListener("click", function () {
  count++;
  showfoodimages(count);
  if (count > pictures.length - 1) {
    count = 0;
  }
});

Prev.addEventListener("click", function () {
  count--;
  showfoodimages(count);
  if (count < 0) {
    count = pictures.length - 1;
  }
});

const mainfood = async () => {
  const foods = await api();

  let foodItems = foods.meals
    .map((object) => {
      //   console.log(object);
      return ` <img class="toshow" src=${object.strMealThumb} alt="">
      
      `;
    })
    .join("");
  foodSection.innerHTML = foodItems;
};
mainfood();

let togglebutton = document.querySelector(".menu");
let links = document.querySelector(".navbars");
togglebutton.addEventListener("click", () => {
  links.classList.toggle("active");
});
