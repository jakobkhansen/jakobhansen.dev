import Link from "next/link";
import { Recipe } from "../../lib/cooklang/types";

type Props = {
  recipes: Recipe[];
};

export default function RecipeList({ recipes }: Props) {
  const recipesSorted = useRecipeSort(recipes);
  return (
    <div className="mdx m-auto max-w-2xl">
      {recipesSorted.map((recipe) => {
        const metadata = recipe.metadata.map;
        const filename = metadata.filename?.split(".")[0];
        return (
          <div key={metadata.title}>
            <Link href={`/food/${filename}`}>{metadata.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

const useRecipeSort = (recipes: Recipe[]) => {
  return recipes.sort((a, b) => {
    const titleA = a.metadata.map.title;
    const titleB = b.metadata.map.title;
    return titleA.localeCompare(titleB);
  });
};
