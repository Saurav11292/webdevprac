let i;
console.log("even number under 100");
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
//----------------------------------------------------------------
let evenNumbers = (num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
};
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(evenNumbers);
//------------------------------------------------------------------------
let arr1 = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr1[0];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}
console.log(largest);
