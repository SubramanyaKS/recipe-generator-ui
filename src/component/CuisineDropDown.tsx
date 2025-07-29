import { cuisines } from '../utils/constant';
import { useRecipeContext } from '../hooks/useRecipeContext';
import ReusableDropdown from './ReusableDropDown';

const CuisineDropdown = () => {
  const {cuisine,setCuisine} = useRecipeContext();

  return (
    <ReusableDropdown
      label="Select Cuisine"
      items={cuisines}
      selected={cuisine}
      onSelect={setCuisine}
      placeholder="Choose a cuisine"
    />
  );
}

export default CuisineDropdown;