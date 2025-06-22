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