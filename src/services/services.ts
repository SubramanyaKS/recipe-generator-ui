export const handleDownloadRecipe = (recipes:string) => {
    const element = document.createElement("a");
    const file = new Blob([recipes], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "recipe.txt";
    document.body.appendChild(element);
    element.click();
};
export const copyRecipe =(recipes:string)=>{
    navigator.clipboard.writeText(recipes);
}
