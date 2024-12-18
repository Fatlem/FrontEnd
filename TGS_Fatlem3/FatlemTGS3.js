// <-- FatlemTGS3.js
let x = 10;
if (x === 10) {
    let x = 20; // <-- shadowing like Rust
    console.log(x);
}
console.log(10);

const y = 10;
// y = 122; <-- tidak bisa, jika mau harus shadowing
let say = 'dunia';
console.log(`Hallo, ${say}!`);

// <-- arrow syntax
const arr = [1, 2, 4, 5];
const doubled = arr.map((item) => item * 2);
console.log(doubled);

// <-- destructuring assignment
const obj = { a: 1, b: 2, c: 3 };
const { a, c } = obj;
console.log(a);
console.log(c);

// <-- Manipulation JSON
const dataMahasiswa = [
    {
        id: 1,
        nama: "Budi Santoso",
        tanggalLhr: "2000-01-15",
        fakultas: "Fakultas Ilmu Komputer",
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
        tanggalLhr: "1999-05-10",
        fakultas: "Fakultas Ekonomi Bisnis",
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
        tanggalLhr: "1998-12-01",
        fakultas: "Fakultas Teknik",
        programStudi: "Teknik Elektro",
        semester: 8,
        nilai: {
            mekanikaTanah: 85,
            strukturBangunan: 89,
        },
        aktif: false,
        organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
    },
];

console.log(dataMahasiswa[0]); // <-- ambil obj
console.log(dataMahasiswa[0].nama); // <-- ambil field obj
console.log(dataMahasiswa[0].nilai.basisData);

// <-- add field into variable
const { nama, semester } = dataMahasiswa[0];
console.log(nama, semester);

const statusAktif = dataMahasiswa[0].aktif ? "masih aktif" : "sudah tidak aktif";
console.log(statusAktif);

// gunakan func split
const getYear = (str) => str.split("-")[0];
console.log(getYear(dataMahasiswa[1].tanggalLhr));

// destrukturing
const [orgs1, ...orgsLain] = dataMahasiswa[0].organisasi;
console.log(orgs1);

// ES6 style
console.log(`name: ${dataMahasiswa[1].nama} and he semester ${dataMahasiswa[1].semester}`);

const nameAllMhs = dataMahasiswa.map((mhs) => mhs.nama);
console.log(nameAllMhs);

const mhsAktif = dataMahasiswa.map((mhs) => mhs.aktif);
console.log(mhsAktif);

// Menghitung total nilai
const nilaiMhs = dataMahasiswa.map((mhs) => {
    const totalNilai = Object.values(mhs.nilai).reduce((total, nilai) => total + nilai, 0);
    return {
        nama: mhs.nama,
        totalNilai: totalNilai,
    };
});
console.log(nilaiMhs);

// CREATE
const mahasiswaBaru = {
    id: 4,
    nama: "Hartono",
    tanggalLhr: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Elektro",
    semester: 8,
    nilai: {
        mekanikaTanah: 87,
        strukturBangunan: 99,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
};

dataMahasiswa.push(mahasiswaBaru);
console.log(dataMahasiswa);

// UPDATE
function updateMahasiswa(id, dataUpdate) {
    const index = dataMahasiswa.findIndex((mhs) => mhs.id === id);
    if (index !== -1) {
        dataMahasiswa[index] = { ...dataMahasiswa[index], ...dataUpdate };
        console.log(`Mahasiswa dengan ID ${id} berhasil diperbarui!`);
    } else {
        console.log(`Mahasiswa dengan ID ${id} tidak ditemukan!`);
    }
}
updateMahasiswa(1, { nama: "Budi Santoso Perbarui", semester: 7 });
console.log(dataMahasiswa);

// DELETE
function deleteMahasiswa(id) {
    const index = dataMahasiswa.findIndex((mhs) => mhs.id === id);
    if (index !== -1) {
        dataMahasiswa.splice(index, 1);
        console.log(`Mahasiswa dengan ID ${id} berhasil dihapus!`);
    } else {
        console.log(`Mahasiswa dengan ID ${id} tidak ditemukan!`);
    }
}
deleteMahasiswa(2);
console.log(dataMahasiswa);
