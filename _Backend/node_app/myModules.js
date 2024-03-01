let penjumlahan = (angka1, angka2) => {
  return `Penjumlahan ${angka1} dan ${angka2} adalah ${angka1 + angka2}`;
};
let pengurangan = (angka1, angka2) => {
  return `Pengurangan ${angka1} dan ${angka2} adalah ${angka1 - angka2}`;
};

module.exports = {
  penjumlahan,
  pengurangan,
};
