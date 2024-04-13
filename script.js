const searchBox = document.querySelector('.searchBox');
const searchBtn  = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')

// function to get recipes
const fetchRecipes=async (query)=>{
    recipeContainer.innerHTML = "<h2> fetching recipes......</h2>"
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipeContainer.innerHTML = ""
    response.meals.forEach(meal=>{
        // console.log(meal);
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('.recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            
        `

        recipeContainer.appendChild(recipeDiv);
    })
    // console.log(response.meals[0]);
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    // console.log('clicke');
})