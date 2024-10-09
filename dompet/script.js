// script.js

let balance = 0;

// Format angka ke format rupiah
function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID', {minimumFractionDigits: 0});
}

// Update tampilan saldo
function updateBalance() {
    document.getElementById('balance').innerText = formatRupiah(balance);
}

// Event Listener untuk Tambah Dana
document.getElementById('addFundsBtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Tambah Dana',
        input: 'number',
        inputLabel: 'Jumlah yang ingin ditambahkan',
        inputPlaceholder: 'Masukkan jumlah (Rp)',
        showCancelButton: true,
        confirmButtonText: 'Tambah',
        cancelButtonText: 'Batal',
        inputAttributes: {
            min: 1
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const amount = parseInt(result.value);
            if (isNaN(amount) || amount <= 0) {
                Swal.fire('Error', 'Masukkan jumlah yang valid!', 'error');
            } else {
                balance += amount;
                updateBalance();
                Swal.fire('Sukses', `Anda telah menambahkan ${formatRupiah(amount)} ke saldo Anda.`, 'success');
            }
        }
    });
});

// Event Listener untuk Tarik Dana
document.getElementById('withdrawFundsBtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Tarik Dana',
        input: 'number',
        inputLabel: 'Jumlah yang ingin ditarik',
        inputPlaceholder: 'Masukkan jumlah (Rp)',
        showCancelButton: true,
        confirmButtonText: 'Tarik',
        cancelButtonText: 'Batal',
        inputAttributes: {
            min: 1
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const amount = parseInt(result.value);
            if (isNaN(amount) || amount <= 0) {
                Swal.fire('Error', 'Masukkan jumlah yang valid!', 'error');
            } else if (amount > balance) {
                Swal.fire('Error', 'Saldo tidak mencukupi!', 'error');
            } else {
                balance -= amount;
                updateBalance();
                Swal.fire('Sukses', `Anda telah menarik ${formatRupiah(amount)} dari saldo Anda.`, 'success');
            }
        }
    });
});

// Inisialisasi tampilan saldo saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateBalance);
