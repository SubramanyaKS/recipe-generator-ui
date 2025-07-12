import { useRecipeContext } from '../context/RecipeContext';
import { cuisines } from '../utils/constant';

const CuisineChoice =()=> {
  const {cuisine,setCuisine} = useRecipeContext();
  const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCuisine(event.target.value);
  };

  return (
    <div >
      <h3 className='text-[var(--text-color)] text-xl font-semibold mb-4 text-center '>Select the Cuisine:</h3>
      <div className='flex flex-row gap-4 text-black'>
         {cuisines.map((res) => (
        <label key={res.id}>
          <input
            type="radio"
            name="resGroup"
            value={res.id}
            checked={cuisine === res.id}
            onChange={handleCuisineChange}
          />
          {res.label}
        </label>
    ))}
    </div>
    <p>You selected: {cuisine}</p>
    </div>
  );
}

export default CuisineChoice;