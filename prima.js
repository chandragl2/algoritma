function isPrima(angka) {
  if (angka < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

function cariPrima(deret) {
  let hasil = [];

  for (let i = 0; i < deret.length; i++) {
    if (isPrima(deret[i])) {
      hasil.push(deret[i]);
    }
  }

  return hasil;
}

// Contoh 1
let angka1 = [1, 3, 5, 7, 11, 15];
let hasil1 = cariPrima(angka1);

console.log(hasil1.length > 0 ? hasil1.join(", ") : "tidak ada");

// Contoh 2
let angka2 = [8, 10, 12, 14];
let hasil2 = cariPrima(angka2);

console.log(hasil2.length > 0 ? hasil2.join(", ") : "tidak ada");
