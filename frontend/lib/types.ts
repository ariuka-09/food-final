export type Category = { _id: string; categoryName: string; foods?: Food[] };
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
export type user = {
  email: string;
  role: string;
  address: string;
};
export type FoodOrder = {
  user: user[];
  totalPrice: number;
  foodOrderItems: Food[];
  status: string;
};
