import { useRecipeContext } from "../context/RecipeContext"

const RecipeCard = () => {
  const {recipes} = useRecipeContext();
  return (
    <div className='h-1/2 shadow-lg rounded-lg mt-4  w-1/2 flex justify-center items-center'>
      <div className='w-full max-w-4xl p-4'>
        <h3 className='text-[var(--text-color)] text-2xl font-semibold mb-4 text-center italic'>AI Generated Recipe</h3>
        <div className='min-h-[190px] border-2 text-[var(--text-color)] p-2 border-dotted border-[var(--accent-color)] max-h-96'>
          {recipes}
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;