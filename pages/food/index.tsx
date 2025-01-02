import { Recipe } from "@cooklang/cooklang-ts";
import { fetchRecipes } from "../../lib/datafetching/recipes";

type Props = {
  recipes: Recipe[];
};

export default function Food({ recipes }: Props) {
  console.log("here", recipes);
  return (
    <div className="m-auto max-w-2xl">
      <p className="text-xl">
        I like cooking sometimes, and I always need to look up specific recipes.
        This is a collection of some of my favorite recipes.
      </p>
      <br />
      <h1 className="text-2xl">TODO</h1>
    </div>
  );
}

export async function getStaticProps() {
  const recipes = await fetchRecipes();

  return {
    props: {
      recipes,
    },
  };
}
