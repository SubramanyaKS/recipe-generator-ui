import React, { useState, type ReactNode } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<string>('');
    const [cuisine,setCuisine]=useState<string>('');
    const [ingredients,setIngredients]=useState<Array<string>>([])


    return (
        <RecipeContext.Provider value={{ recipes, setRecipes,cuisine,setCuisine,ingredients,setIngredients }}>
            {children}
        </RecipeContext.Provider>
    );
};
