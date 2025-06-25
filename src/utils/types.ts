export type ButtonProps={
    title:string;
    color:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}
export interface RecipeContextType {
    recipes: string;
    setRecipes: (details:string)=>void;
}
export type IconButtonProps = {
  color: string;    
    title?: string;   
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    Icon: React.ReactNode;
}