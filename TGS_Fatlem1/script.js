let editMode = false;
let editNIM = '';

function openModal(mode) {
    const modal = document.getElementById('modalForm');
    modal.style.display = 'flex';
    if (mode === 'add') {
        document.getElementById('modalTitle').textContent = 'Tambah Mahasiswa';
        document.getElementById('nim').value = '';
        document.getElementById('nama').value = '';
        editMode = false;
    }
}

function openEditModal(nim, nama) {
    const modal = document.getElementById('modalForm');
    modal.style.display = 'flex';
    document.getElementById('modalTitle').textContent = 'Edit Mahasiswa';
    document.getElementById('nim').value = nim;
    document.getElementById('nama').value = nama;
    editMode = true;
    editNIM = nim;
}

function closeModal() {
    const modal = document.getElementById('modalForm');
    modal.style.display = 'none';
}

function saveStudent() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;

    if (!nim || !nama) {
        alert('NIM dan Nama harus diisi!');
        return;
    }

    const studentList = document.getElementById('student-list');

    if (editMode) {
        const existingRow = document.querySelector(`tr[data-nim="${editNIM}"]`);
        existingRow.innerHTML = `
            <td></td>
            <td>${nim}</td>
            <td>${nama}</td>
            <td>
                <button onclick="openEditModal('${nim}', '${nama}')">Edit</button>
                <button onclick="openDeleteConfirm('${nim}')">Hapus</button>
            </td>
        `;
    } else {
        const row = document.createElement('tr');
        row.setAttribute('data-nim', nim);
        row.innerHTML = `
            <td></td>
            <td>${nim}</td>
            <td>${nama}</td>
            <td>
                <button onclick="openEditModal('${nim}', '${nama}')">Edit</button>
                <button onclick="openDeleteConfirm('${nim}')">Hapus</button>
            </td>
        `;
        studentList.appendChild(row);
    }

    updateRowNumbers();
    closeModal();
}

function updateRowNumbers() {
    const rows = document.querySelectorAll('#student-list tr');
    rows.forEach((row, index) => {
        row.querySelector('td').textContent = `${index + 1}.`;
    });
}

function openDeleteConfirm(nim) {
    const deleteConfirm = document.getElementById('deleteConfirm');
    deleteConfirm.style.display = 'flex';
    editNIM = nim;
}

function closeDeleteConfirm() {
    const deleteConfirm = document.getElementById('deleteConfirm');
    deleteConfirm.style.display = 'none';
}

function confirmDelete() {
    const studentRow = document.querySelector(`tr[data-nim="${editNIM}"]`);
    studentRow.remove();
    closeDeleteConfirm();
    updateRowNumbers();
}
