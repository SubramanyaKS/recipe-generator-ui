import type { ChangeEventHandler } from "react";

export type ButtonProps={
    title:string;
    color:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}
export type AuthContextType= {
  currentUser: unknown;
  loading: boolean;
  logout: () => Promise<void>;
}
export type RecipeTnputUIProps = {
  newItem:string;
  onClick:React.MouseEventHandler<HTMLButtonElement>;
  onChange:ChangeEventHandler;
}
export type RecipeContextType = {
    recipes: string;
    setRecipes: (details:string)=>void;
    cuisine:string;
    setCuisine:(details:string)=>void;
    ingredients:Array<string>;
    setIngredients:(details:Array<string>)=>void;
    mealType:string;
    setMealType:(details:string)=>void;
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

export type IngredientChipProps ={
    text:string;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

type DropdownItem ={
  id: string;
  label: string;
}

export type ReusableDropdownProps ={
  label?: string;
  items: DropdownItem[];
  selected?: string;
  onSelect: (id: string) => void;
  placeholder?: string;
}