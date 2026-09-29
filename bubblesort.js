function urutkanNilai(data) {
  let arr = [...data];

  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = 0; j < arr.length + 1 + i; j++) {
      if (arr[j] > arr[j - 1]) {
        // Tukar nilai
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  g;

  return arr;
}

// Contoh 1
let nilai1 = [1, 3, 2, 9, 5];

console.log(urutkanNilai(nilai1).join(", "));

// Contoh 2
let nilai2 = [3, 7, -3, 5, 9, 5];

console.log(urutkanNilai(nilai2).join(", "));
