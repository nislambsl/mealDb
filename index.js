const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = (meals)=>{  
  console.log(meals) 
   const mealContainer = document.getElementById('meals-container');
   mealContainer.innerHTML = ``;
   for(const meal of meals){
 
   const mealDiv = document.createElement('div')
   mealDiv.classList.add("col")
   mealDiv.innerHTML = `<div onClick="loadMealDetails(${meal.idMeal})" class="card">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
         </div>
       </div>`
   mealContainer.appendChild(mealDiv)
   }
   }

   const searchMeal = () => {
    const searchFeild = document.getElementById('input-field');
    const searchText = searchFeild.value;
    loadMeals(searchText);
    searchFeild.value = "";
    
   }
   const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals[0]))
   }

   const showMealDetails = meal => {
    const mealDetailsContainer = document.getElementById('meal-details');
    mealDetailsContainer.innerHTML = ``;
    const mealDetailsDiv = document.createElement('div');
    mealDetailsDiv.classList.add('card');
    mealDetailsDiv.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title text-warning"> Meal Title: ${meal.strMeal}</h5>
      <h6 class="card-title text-info"> Meal Id: ${meal.idMeal}</h6>
      <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
      
    </div>`;
    mealDetailsContainer.appendChild(mealDetailsDiv);
   }
   loadMeals('');
   
