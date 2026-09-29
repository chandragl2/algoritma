function hitungUmur(tanggalLahir) {
  const lahir = new Date(tanggalLahir);
  const sekarang = new Date();

  let tahun = sekarang.getFullYear() - lahir.getFullYear();
  let bulan = sekarang.getMonth() - lahir.getMonth();
  let hari = sekarang.getDate() - lahir.getDate();

  // Jika hari negatif
  if (hari < 0) {
    bulan--;

    const jumlahHariBulanSebelumnya = new Date(
      sekarang.getFullYear(),
      sekarang.getMonth(),
      0,
    ).getDate();

    hari += jumlahHariBulanSebelumnya;
  }

  // Jika bulan negatif
  if (bulan < 0) {
    tahun--;
    bulan += 12;
  }

  // Menghitung jumlah tahun kabisat yang dilewati
  let tahunKabisat = 0;

  for (
    let tahunCek = lahir.getFullYear();
    tahunCek <= sekarang.getFullYear();
    tahunCek++
  ) {
    if (tahunCek % 400 === 0 || (tahunCek % 4 === 0 && tahunCek % 100 !== 0)) {
      tahunKabisat++;
    }
  }

  return {
    tahun: tahun,
    bulan: bulan,
    hari: hari,
    tahunKabisat: tahunKabisat,
  };
}

// Input tanggal lahir
const hasil = hitungUmur("1990-12-08");

console.log(`${hasil.tahun} tahun, ${hasil.bulan} bulan, ${hasil.hari} hari`);

console.log(`${hasil.tahunKabisat} tahun kabisat`);
