import ReusableDropdown from './ReusableDropDown';
import { mealTypes } from '../utils/constant';
import { useRecipeContext } from '../hooks/useRecipeContext';

const MealTypeDropdown = () => {
  const { mealType, setMealType } = useRecipeContext();

  return (
    <ReusableDropdown
      label="Select Meal Type"
      items={mealTypes}
      selected={mealType}
      onSelect={setMealType}
      placeholder="Choose a meal type"
    />
  );
};

export default MealTypeDropdown;