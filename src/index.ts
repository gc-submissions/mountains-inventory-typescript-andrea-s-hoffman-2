import "./mountains";
import "./products";
import "./inventory";
import { findNameOfTallestMountain, mountains } from "./mountains";
import { calcAverageProductPrice, products } from "./products";
import { calcInventoryValue, inventory } from "./inventory";

// manual testing (console log)

const result = findNameOfTallestMountain(mountains);
console.log(result);
console.log(findNameOfTallestMountain([]));

console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice([]));

const storeValue = calcInventoryValue(inventory);
console.log(storeValue);
console.log(calcInventoryValue([]));
