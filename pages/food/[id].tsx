import { Metadata, Recipe } from "@cooklang/cooklang-ts";
import { GetServerSidePropsContext } from "next";
import { fetchRecipe } from "../../lib/datafetching/recipes";

type Props = {
  recipe: Recipe;
};

export default function RecipePage({ recipe }: Props) {
  const metadata = recipe.metadata.map as unknown as Metadata;
  return <div className="m-auto max-w-2xl">{metadata.title || ""}</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const recipeName = context.params?.id;

  if (!recipeName || typeof recipeName !== "string") {
    return <div>404</div>;
  }

  const recipe = await fetchRecipe(recipeName);

  return {
    props: {
      recipe,
    },
  };
}
