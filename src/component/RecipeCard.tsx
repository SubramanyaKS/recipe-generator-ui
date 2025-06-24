import { useRecipeContext } from "../context/RecipeContext"
import { copyRecipe, handleDownloadRecipe } from "../services/services";
import Button from "./Button";

const RecipeCard = () => {
  const {recipes} = useRecipeContext();
  const [dishLine, ...stepLines] = recipes.split('Steps:');
  const dishName = dishLine.replace('Dish:', '').trim();

  // Split steps by numbering (e.g., "1.", "2.", etc.)
  const steps = stepLines.join('').split(/\d+\.\s/).filter(Boolean);

  

  return (
    <div className='h-1/2 shadow-lg rounded-lg mt-4  w-1/2 flex justify-center items-center'>
      <div className='w-full max-w-4xl p-4'>
        <h3 className='text-[var(--text-color)] text-2xl font-semibold mb-4 text-center italic'>AI Generated Recipe</h3>
        <div className='min-h-[190px] border-2 text-[var(--text-color)] p-2 border-dotted border-[var(--accent-color)] max-h-96'>
          <h2>Dish: {dishName}</h2>
          <br/>
          <p>Steps:</p>
          <ol className='list-decimal pl-5'>
        {steps
          .filter(step => step.trim() !== '')
          .map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
      </ol>
        </div>
        {recipes?<div className="flex flex-row justify-between m-3">
           <Button color='bg-[var(--accent-color)] hover:bg-[var(--primary-color)]' onClick={()=>handleDownloadRecipe(recipes)} title="Save Recipe"/>
           <Button color='bg-[var(--primary-color)] hover:bg-[var(--accent-color)]' onClick={()=>copyRecipe(recipes)} title="Copy Recipe"/>
            
        </div>
        : null
        }
      </div>
      
    </div>
  )
}

export default RecipeCard;