import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
export const findNameOfTallestMountain = (arrOfMtns: Mountain[]): string => {
  if (arrOfMtns.length === 0) {
    return "";
  }
  let tallest: Mountain = arrOfMtns[0];

  arrOfMtns.forEach((mtn) => {
    if (mtn.height > tallest.height) {
      tallest = mtn;
    }
  });
  return tallest.name;
  //   return arrOfMtns.reduce((prev, cv) => (cv.height > prev.height ? cv : prev))
  //     .name;
};
