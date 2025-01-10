import { Metadata, Recipe as RecipeCooklang } from "@cooklang/cooklang-ts";

type Props = {
  recipe: RecipeCooklang;
};

export function Recipe({ recipe }: Props) {
  const metadata = recipe.metadata.map as unknown as Metadata;
  console.log(metadata);
  return (
    <div>
      <h1>Recipe</h1>
    </div>
  );
}
