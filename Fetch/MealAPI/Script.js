// Pick random one Algo
// 1. user click btn - Done
// 2. send a request - Done
// 3. receive a response - Done
// 4. create elements with the response - Done

// Search by name Algo
// 1. user type something in input - Done
// 2. send request via input value - Done
// 3. receive the request - Done
// 4. map over the results and create an element

// DOM element
const randomBtn = document.getElementById("randomMeal");
const searchInput = document.getElementById("searchMeal");
const result = document.getElementById("result"); 

let meals;
let searchUrl = "";

async function fetchApi(url) {
  meals = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
    .then((res) => res.json())
    .then((data) => data.meals);
}

async function displayRandom() {
  await fetchApi("random.php");
  result.innerHTML = meals
    .map((meal) => {
      return `
          <div class="random-container">
              <h4>${meal.strMeal}</h4>
              <div class="meal-info" >
                  <p>Category: <span> ${meal.strCategory}</span></p>
                  <p>Area: <span> ${meal.strArea}</span></p>
              </div>
              <img src="${meal.strMealThumb}" />
              <p class="meal-instructions" >${meal.strInstructions}</p>
              <a href="${meal.strYoutube}" > Youtube </a>
          </div>
      `;
    })
    .join("");
}

async function displaySearch(e) {
  searchUrl = `search.php?s=${e.target.value}`;
  await fetchApi(searchUrl);
  console.log(meals);

  if (meals === null) {
    return (result.innerHTML = `<div>
        <h2>No Results...</h2>
    </div>`);
  }

  result.innerHTML = meals
    .map((meal) => {
      return `<div class="meal-card" >
      <h4>${meal.strMeal}</h4>
      <p> category: ${meal.strCategory} <br/>area: ${meal.strArea} </p>
        <img src="${meal.strMealThumb}"  />
    </div>`;
    })
    .join("");
}

// Events
randomBtn.addEventListener("click", displayRandom);
searchInput.addEventListener("input", displaySearch);