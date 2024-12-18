const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Tidak Sigma"],
  },
];

// Perbaikan 1: Menggunakan console.log() bukan console.long()
const listMhs = dataMahasiswa;
console.log(listMhs);

const mahasiswa = listMhs[2];
console.log(mahasiswa);

// Destrukturisasi
const { nama, tanggalLahir, organisasi, ...sisanya } = mahasiswa;
console.log(nama);
console.log(sisanya);
console.log(organisasi);

// Spread Operator
const tambahOrg = [...organisasi, "Futsal"];
console.log(tambahOrg);

// Split
console.log(tanggalLahir);
const tanggalAsli = tanggalLahir.split("-");
console.log(tanggalAsli[2]);

// Template Literals
const dataDiri = `Nama: ${nama}, tanggal lahir: ${tanggalLahir}`;
console.log(dataDiri);

// Conditional (Ternary Operator)
const statusAktif = mahasiswa.aktif ? "masih aktif" : "walawe tidak aktif";
console.log(`Atas nama ${nama}, statusnya ${statusAktif}`);

const kupu2 = organisasi[0] || "tidak ikut ormawa";
console.log(kupu2);

// filtering
const allMhsAktif = listMhs.filter((mhs) => mhs.aktif);
console.log(allMhsAktif);

// nambah objek baru
const newMhs = {
  id : 5,
  nama : "Vincent",
  nilai: {
    algoritma: 80,
    basdat: 85,
    daspro: 90,
  },
  semester: 12
};
const dataAnyar = [...listMhs, newMhs];
console.log(dataAnyar);

// array map: sort mhs
const sortingMhs = listMhs.slice().sort((a,b) => a.semester - b.semester)

console.log(sortingMhs);
