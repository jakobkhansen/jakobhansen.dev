import {
  NumberValue,
  Quantity,
  Recipe,
  SectionContent,
  SectionStep,
  StepItem,
  Value,
} from "./types";

export function parseQuantity(quantity: Quantity): string | null {
  switch (quantity.value.type) {
    case "fixed":
      return parseFixedValue(quantity.value.value);
    case "many":
      return null;
  }
}

function parseFixedValue(value: Value) {
  switch (value.type) {
    case "number":
      return parseNumberValue(value.value);
    case "string":
      return value.value;
    case "range":
      return `${value.start}-${value.end}`;
  }
}

function parseNumberValue(value: NumberValue) {
  switch (value.type) {
    case "fraction":
      return `${value.value.whole > 0 ? value.value.whole + " " : ""}${value.value.num}/${value.value.den}`;
    case "regular":
      return String(value.value);
  }
}

export function parseSectionContent(
  content: SectionContent,
  recipe: Recipe,
): JSX.Element[] {
  switch (content.type) {
    case "step":
      return parseStep(content.value, recipe);
  }
}

function parseStep(step: SectionStep, recipe: Recipe): JSX.Element[] {
  return step.items.map((step) => parseStepItem(step, recipe));
}

function parseStepItem(item: StepItem, recipe: Recipe): JSX.Element {
  switch (item.type) {
    case "ingredient":
      return (
        <a href={`#${recipe.ingredients[item.index].name}`}>
          {recipe.ingredients[item.index].name}
        </a>
      );
    case "text":
      return <span>{item.value}</span>;
    case "cookware":
      return <span>{recipe.cookware[item.index].name}</span>;
  }
}
