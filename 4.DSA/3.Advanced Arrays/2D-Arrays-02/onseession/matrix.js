const arr = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i == j && arr[i][j] !== 1) {
      console.log("Not an identity matrix");
      return;
    } else if (i !== j && arr[i][j] !== 0) {
      console.log("Not an identity matrix");
      return;
    }
  }
}
console.log(`Identity Matrix`);
