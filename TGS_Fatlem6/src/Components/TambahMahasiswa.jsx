import React, { useState, useEffect } from 'react';

const TambahMahasiswa = ({ student, onSubmit, onClose }) => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');

    useEffect(() => {
        if (student) {
            setNim(student.nim);
            setNama(student.nama);
        } else {
            setNim('');
            setNama('');
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nim, nama });
        onClose();
    };

    return (
        <div id="studentModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/3 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">{student ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nim" className="block font-semibold mb-1">NIM</label>
                        <input
                            type="text"
                            id="nim"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            className="w-full border px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nama" className="block font-semibold mb-1">Nama</label>
                        <input
                            type="text"
                            id="nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="w-full border px-4 py-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={onClose}>Batal</button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TambahMahasiswa;
