import { Metadata } from "@cooklang/cooklang-ts";
import { parseQuantity, parseSectionContent } from "../../lib/cooklang/parse";
import { Ingredient, Recipe as RecipeType } from "../../lib/cooklang/types";

type Props = {
  recipe: RecipeType;
};

export function Recipe({ recipe }: Props) {
  console.log("recipe", recipe);
  const metadata = recipe.metadata.map as unknown as Metadata;
  const ingredientList = useFilterIngredients(recipe.ingredients);
  console.log("filtered", ingredientList);

  return (
    <div className="mdx m-auto max-w-2xl">
      <h1>{metadata.title}</h1>
      <h2>Ingredients</h2>
      {ingredientList.map((ingredient, index) => (
        <div key={ingredient.name} id={`${ingredient.name}`}>
          {ingredient.quantity && (
            <>
              <span>{parseQuantity(ingredient.quantity)}&nbsp;</span>
              {ingredient.quantity.unit && (
                <span>{ingredient.quantity.unit}&nbsp;</span>
              )}
            </>
          )}
          <span>{ingredient.name}</span>
          {ingredient.note && <span>&nbsp;({ingredient.note})</span>}
        </div>
      ))}
      <br />
      <h2>Steps</h2>
      {recipe.sections.map((section) => (
        <div key={section.name}>
          {section.name && <h3>{section.name}</h3>}
          <div className="block">
            {section.content.map((content, i) => (
              <>
                <br />
                <p key={i}>{parseSectionContent(content, recipe)}</p>
              </>
            ))}
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}

const useFilterIngredients = (ingredients: Ingredient[]) => {
  return ingredients.filter((ingredient) => {
    return ingredient.modifiers == "";
  });
};
