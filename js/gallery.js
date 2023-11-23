let searchbtn = document.getElementById("searchbot");
let displayhtml = document.querySelector(".allinfo");

const api = async () => {
  try {
    let searchfield = document.getElementById("searchinput").value.trim();
    let apienpoint = `put your api url here=${searchfield}`;
    const res = await fetch(apienpoint);
    const data = await res.json();
    //   console.log(data);
    return data;
  } catch (error) {
    alert("errrrrrrr");
    console.log(error);
  }
};

showfoodimages = async (Foods) => {
  images = await api();
  let foodStuffs = images.meals
    .map((object) => {
      // console.log(object);
      return `<div class="innerfood">
     <img class="toshow" src=${object.strMealThumb} alt="">
     <p class="foodname">${object.strMeal}</p>
 </div>
`;
    })
    .join("");
  displayhtml.innerHTML = foodStuffs;
};

searchbtn.addEventListener("click", showfoodimages);

let togglebutton = document.querySelector(".menu");
let links = document.querySelector(".navbars");
togglebutton.addEventListener("click", () => {
  links.classList.toggle("active");
});
