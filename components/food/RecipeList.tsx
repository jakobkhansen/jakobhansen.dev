import { Metadata, Recipe } from "@cooklang/cooklang-ts";
import Link from "next/link";

type Props = {
  recipes: Recipe[];
};

export default function RecipeList({ recipes }: Props) {
  const recipesSorted = useRecipeSort(recipes);
  return (
    <div className="mdx m-auto max-w-2xl">
      {recipesSorted.map((recipe) => {
        const metadata = recipe.metadata.map as unknown as Metadata;
        const filename = metadata.filename.split(".")[0];
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
    const metadataA = a.metadata.map as unknown as Metadata;
    const metadataB = b.metadata.map as unknown as Metadata;
    return metadataA.title.localeCompare(metadataB.title);
  });
};
