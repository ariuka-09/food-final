export type FoodCategory = { _id: string; categoryName: string };
export type Food = {
  _id: string;
  foodName: string;
  ingredients: string;
  image: string;
  price: number;
  category: string;
};
export type foodInfo = {
  img: string;
  name: string;
  price: number;
  ingredients: string;
};
