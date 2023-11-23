let apienpoint = "put your api url here";

let pictures = [];
const api = async () => {
  const res = await fetch(apienpoint);
  const data = await res.json();
  //   console.log(data)
  return data;
};

showfoodimages = async (Foods) => {
  let display = document.querySelector(".foodpic");
  images = await api();
  pictures = images.meals.map((meals) => meals);
  //  console.log(pictures);
  let n = 10;
  let result = pictures.slice(6, n);
  // console.log(result);
  let newSet = result
    .map((pics) => {
      return `
    <div class="innerfood">

    <img class="pic-api" id="food1" src=${pics.strMealThumb} alt="">

    <p>${pics.strMeal} </p>
</div> 
    `;
    })
    .join("");

  display.innerHTML = newSet;
};
showfoodimages();

let togglebutton = document.querySelector(".menu");
let links = document.querySelector(".navbars");
togglebutton.addEventListener("click", () => {
  links.classList.toggle("active");
});
