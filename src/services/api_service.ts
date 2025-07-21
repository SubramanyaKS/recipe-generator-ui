import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const generateRecipe = async(ingredients:string)=>{
    try {
        const response = await axios.post(`${BASE_URL}/generate-recipe`,{prompt:ingredients});
        return response.data.recipe;
        
    } catch (error) {
        console.error("Error throwed",error);
        throw error;
        
    }
}

export const generateRecipes = async(ingredients:string,cuisines:string)=>{
    try {
        const response = await axios.post(`${BASE_URL}/recipe-generate`,{ingredients:ingredients,cuisine:cuisines});
        return response.data.recipe;
        
    } catch (error) {
        console.error("Error throwed",error);
        throw error;
        
    }
}