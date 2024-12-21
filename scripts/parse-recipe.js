const { readFileSync } = require("fs");
const { Parser } = require("@cooklang/cooklang-ts");

function parseRecipe(recipe) {
  const source = readFileSync(recipe, "utf-8");
  return new Parser().parse(source);
}

const recipe = process.argv[2];

console.log(parseRecipe(recipe));
