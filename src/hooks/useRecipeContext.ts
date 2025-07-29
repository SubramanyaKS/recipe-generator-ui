import { useContext } from "react";
import type { RecipeContextType } from "../utils/types";
import { RecipeContext } from "../context/RecipeContext";

export const useRecipeContext = (): RecipeContextType =>{
    const context = useContext(RecipeContext);
  
    if(!context){
        throw new Error('useRecipeContext must be used within Provider')

    }
    return context;
}