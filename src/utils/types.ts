import type { ChangeEventHandler } from "react";

export type ButtonProps={
    title:string;
    color:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}
export interface RecipeContextType {
    recipes: string;
    setRecipes: (details:string)=>void;
    cuisine:string;
    setCuisine:(details:string)=>void;
}
export type IconButtonProps = {
  color: string;    
    title?: string;   
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    Icon: React.ReactNode;
}

export type InputProps = {
    title: string,
    OnChange: ChangeEventHandler,
    id: string,
    value: string,
    type: string,
    name: string,
}

export type SubmitButtonProps = {
  title: string,
  OnClick?: () => void,
}