import {
  NumberValue,
  Quantity,
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

export function parseSectionContent(content: SectionContent): string {
  switch (content.type) {
    case "step":
      return parseStep(content.value);
  }
}

function parseStep(step: SectionStep): string {
  return step.items.map(parseStepItem).join(" ");
}

function parseStepItem(item: StepItem): string {
  switch (item.type) {
    case "ingredient":
      return String(item.index);
    case "text":
      return item.value;
    case "cookware":
      return String(item.index);
  }
}
