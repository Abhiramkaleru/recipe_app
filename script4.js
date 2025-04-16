 async function searchrecipe(){
const searchInput=document.getElementById('searchinput').value;
const recipeContainer=document.getElementById('recipecontainer');
recipeContainer.innerHTML="";

 try{
    const response=await fetch( `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=60eb49ff&app_key=e4b659cdbbf406e092ab3a06373850a7`)
    // const response=await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=40b53e5e&app_key=a9916ab9a735ea18f2077365e39861a5`)
    if(!response.ok){
        throw new Error(`Http error! status:${response.status}`); 
 }
let data =await response.json();
// console.log(data)
  

data.hits.forEach((main) => {
  let recipeHTML=`
  <div class="recipe">
  <h2>${main.recipe.label}</h2>
  <img src="${main.recipe.image}"alt="${main.recipe.label}">
  <p>calories:${Math.round(main.recipe.calories)}</p>
  <p>serving:${main.recipe.yield}</p>
  <a href="${main.recipe.url}"target="_blank">view recipe</a>
  </div>
  
  `
  ;

  //Append the recipe HTML to recipe container
  recipeContainer.innerHTML+=recipeHTML;

})
 }catch(error){
console.log('error fetching recipe',error)
 }
}
