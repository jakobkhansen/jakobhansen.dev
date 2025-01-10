import { Recipe as RecipeCooklang } from "@cooklang/cooklang-ts";
import { GetServerSidePropsContext } from "next";
import Error from "next/error";
import { Recipe } from "../../components/food/Recipe";
import { fetchRecipe } from "../../lib/datafetching/recipes";

type Props = {
  recipe: RecipeCooklang | undefined;
};

export default function RecipePage({ recipe }: Props) {
  if (!recipe) {
    return <Error statusCode={404} />;
  }

  return <Recipe recipe={recipe} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const recipeName = context.params?.id;

  if (!recipeName || typeof recipeName !== "string") {
    return {
      props: {
        recipe: null,
      },
    };
  }

  const recipe = await fetchRecipe(recipeName);

  return {
    props: {
      recipe,
    },
  };
}
