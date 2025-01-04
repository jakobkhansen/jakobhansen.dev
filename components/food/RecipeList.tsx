import { Metadata, Recipe } from "@cooklang/cooklang-ts";
import Link from "next/link";

type Props = {
  recipes: Recipe[];
};

export default function RecipeList({ recipes }: Props) {
  console.log(recipes);
  return (
    <div className="m-auto max-w-2xl">
      {recipes.map((recipe) => {
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
