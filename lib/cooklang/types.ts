export type Recipe = {
  metadata: {
    map: {
      title: string;
      filename?: string;
      description: string;
      tags: string[];
      source?: string;
    };
  };
  ingredients: Ingredient[];
  sections: Section[];
  cookware: Cookware[];
};

export type Ingredient = {
  name: string;
  modifiers: string;
  note?: string;
  quantity?: Quantity;
};

export type Quantity = {
  value: QuantityValue;
  unit?: string;
};

type QuantityValue =
  | {
      value: Value;
      type: "fixed";
    }
  | {
      values: Value[];
      type: "many";
    };

export type Value =
  | { value: NumberValue; type: "number" }
  | { value: string; type: "string" }
  | { start: number; end: number; type: "range" };

export type NumberValue =
  | {
      type: "fraction";
      value: {
        whole: number;
        num: number;
        den: number;
        err: string;
      };
    }
  | {
      type: "regular";
      value: number;
    };

export type Section = {
  name: string | null;
  content: SectionContent[];
};

export type SectionContent = {
  type: "step";
  value: SectionStep;
};

export type SectionStep = {
  items: StepItem[];
};

export type StepItem =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "ingredient";
      index: number;
    }
  | {
      type: "cookware";
      index: number;
    };

export type Cookware = {
  name: string;
};
