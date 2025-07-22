import { useRecipeContext } from "../hooks/useRecipeContext";
import RecipeCardUI from "./RecipeCardUI";

const RecipeCard = () => {
  const {recipes} = useRecipeContext();
  const [dishLine, ...stepLines] = recipes.split('Steps:');
  const dishName = dishLine.replace('Dish:', '').trim();


  const steps = stepLines.join('').split(/\d+\.\s/).filter(Boolean);

  

  return (
   <RecipeCardUI steps={steps} dishName={dishName} recipes={recipes}/>
  )
}

export default RecipeCard;