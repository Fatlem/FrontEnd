// Initialize based on existing rows
let studentCount = $('#studentTable tbody tr').length;

// Function to open modal
function openModal(type, nim = '', nama = '') {
    $('#modalTitle').text(type === 'add' ? 'Tambah Mahasiswa' : 'Edit Mahasiswa');
    $('#nim').val(nim);
    $('#nama').val(nama);
    $('#studentModal').removeClass('hidden');
}

// Function to close modal
function closeModal() {
    $('#studentModal').addClass('hidden');
    $('#studentForm')[0].reset();
}

// Function to update row numbers
function updateRowNumbers() {
    $('#studentTable tbody tr').each(function (index) {
        $(this).find('td:first').text(index + 1 + '.');
    });
}

// Event listener for Tambah Mahasiswa button
$('#addStudentBtn').click(function () {
    openModal('add');
});

// Event listener for Edit button
$(document).on('click', '.editBtn', function () {
    const row = $(this).closest('tr');
    const nim = row.find('td:nth-child(2)').text();
    const nama = row.find('td:nth-child(3)').text();
    openModal('edit', nim, nama);
    // Store the row for later update
    $('#studentForm').data('row', row);
});

// Event listener for Hapus button
$(document).on('click', '.deleteBtn', function () {
    const row = $(this).closest('tr');
    const nim = row.find('td:nth-child(2)').text();
    Swal.fire({
        title: 'Apakah Yakin Sirrr?',
        text: `ElKecepatan Akan Menghapus Data Ini ${nim}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Remove the row
            row.remove();
            updateRowNumbers(); // Update row numbers after deletion
            Swal.fire(
                'Terhapus!',
                'Data Mahasiswa Telah Dihapus Sirrr.',
                'success'
            );
        }
    });
});

// Event listener for form submit
$('#studentForm').submit(function (e) {
    e.preventDefault();

    const nim = $('#nim').val();
    const nama = $('#nama').val();

    if ($('#modalTitle').text() === 'Tambah Mahasiswa') {
        studentCount++; // Increment the student count
        const newRow = `<tr>
            <td class="border px-4 py-2">${studentCount}.</td>
            <td class="border px-4 py-2">${nim}</td>
            <td class="border px-4 py-2">${nama}</td>
            <td class="border px-4 py-2">
                <button class="bg-yellow-500 text-white px-4 py-2 rounded editBtn">Edit</button>
                <button class="bg-red-500 text-white px-4 py-2 rounded deleteBtn">Hapus</button>
            </td>
        </tr>`;
        $('#studentTable tbody').append(newRow); // Append new row to table
    } else {
        const row = $('#studentForm').data('row');
        row.find('td:nth-child(2)').text(nim); // Update NIM
        row.find('td:nth-child(3)').text(nama); // Update Nama
    }

    updateRowNumbers(); // Update row numbers after adding or editing
    closeModal();
    Swal.fire({
        title: 'Berhasil!',
        text: 'Data Mahasiswa Berhasil Disimpan Sirrr.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

// Initialize feather icons
feather.replace();
