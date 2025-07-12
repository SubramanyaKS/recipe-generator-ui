import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { RecipeContextType } from '../utils/types';

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<string>('');
    const [cuisine,setCuisine]=useState<string>('');


    return (
        <RecipeContext.Provider value={{ recipes, setRecipes,cuisine,setCuisine }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = (): RecipeContextType =>{
    const context = useContext(RecipeContext);

    if(!context){
        throw new Error('useRecipeContext must be used within Provider')

    }
    return context;
}