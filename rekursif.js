function rekursif(str) {
  if (str.length > 3) {
    let hasil = "";

    for (let i = str.length - 1; i >= 0; i--) {
      hasil += str[i];
    }

    console.log(hasil);
  } else {
    console.log(str);
  }
}

rekursif("LARAVEL");
rekursif("INDONESIA");
