export type ButtonProps={
    title:string;
    color:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}
export interface RecipeContextType {
    recipes: string;
    setRecipes: (details:string)=>void;
}