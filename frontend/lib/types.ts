export type Category = { _id: string; categoryName: string; foods:Food };
export type Food = {
  _id: string;
  foodName: string;
  ingredients: string;
  image: string;
  price: number;
  category: Category;
};
export type foodInfo = {
  img: string;
  name: string;
  price: number;
  ingredients: string;
};
