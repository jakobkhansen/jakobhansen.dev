import RecipeList from "../../components/food/RecipeList";
import { Recipe } from "../../lib/cooklang/types";
import { fetchRecipes } from "../../lib/datafetching/recipes";

type Props = {
  recipes: Recipe[];
};

export default function Food({ recipes }: Props) {
  return (
    <div className="m-auto max-w-2xl">
      <p className="text-xl">
        I like cooking sometimes, and I always need to look up specific recipes.
        This is a collection of some of my favorite recipes.
      </p>
      <br />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export async function getServerSideProps() {
  const recipes = await fetchRecipes();

  return {
    props: {
      recipes,
    },
  };
}
