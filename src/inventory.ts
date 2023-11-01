import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
  {
    product: { name: "perfume", price: 70 },
    quantity: 2,
  },
  {
    product: { name: "cup", price: 4 },
    quantity: 100,
  },
  {
    product: { name: "slay potion", price: 200 },
    quantity: 3,
  },
];

export const calcInventoryValue = (arr: InventoryItem[]): number => {
  let totalValue: number = 0;
  // add up
  for (const thing of arr) {
    totalValue += thing.product.price * thing.quantity;
  }
  return totalValue;
  //   return arr.reduce((prev, cv) => prev + cv.product.price * cv.quantity, 0);
};
