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
};

export type Ingredient = {
  name: string;
  amount: string;
  modifiers: string;
};
