import Product from "./models/Product";

export const products: Product[] = [
  { name: "perfume", price: 70 },
  { name: "cup", price: 4 },
  { name: "slay potion", price: 200 },
];

export const calcAverageProductPrice = (arr: Product[]): number => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  // add sum
  arr.forEach((thing) => {
    sum += thing.price;
  });
  return +(sum / arr.length).toFixed(2);
  //   return arr.reduce((prev, cv) => prev + cv.price, 0) / arr.length;
};
