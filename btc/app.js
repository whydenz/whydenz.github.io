// app.js

// Inisialisasi saldo di localStorage jika belum ada
if (!localStorage.getItem('balance')) {
    localStorage.setItem('balance', '0');
}

// Fungsi untuk memperbarui tampilan saldo
function updateBalance() {
    const balance = parseInt(localStorage.getItem('balance'));
    document.getElementById('balance').innerText = `Rp ${balance.toLocaleString('id-ID')}`;
}

// Panggil fungsi untuk menampilkan saldo saat aplikasi dimuat
document.addEventListener('DOMContentLoaded', updateBalance);

// Event Listener untuk tombol "Tambah Dana"
document.getElementById('addFundsBtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Tambah Dana',
        input: 'number',
        inputLabel: 'Jumlah (Rp)',
        inputPlaceholder: 'Masukkan jumlah yang ingin ditambahkan',
        showCancelButton: true,
        confirmButtonText: 'Tambah',
        inputValidator: (value) => {
            if (!value || value <= 0) {
                return 'Masukkan jumlah yang valid!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const currentBalance = parseInt(localStorage.getItem('balance'));
            const addAmount = parseInt(result.value);
            const newBalance = currentBalance + addAmount;
            localStorage.setItem('balance', newBalance.toString());
            updateBalance();
            Swal.fire('Berhasil!', `Anda telah menambahkan Rp ${addAmount.toLocaleString('id-ID')}.`, 'success');
        }
    });
});

// Event Listener untuk tombol "Kirim Dana"
document.getElementById('sendFundsBtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Kirim Dana',
        html:
            `<input type="text" id="recipient" class="swal2-input" placeholder="Nama Penerima">
             <input type="number" id="amount" class="swal2-input" placeholder="Jumlah (Rp)">`,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            const recipient = document.getElementById('recipient').value;
            const amount = parseInt(document.getElementById('amount').value);
            if (!recipient) {
                Swal.showValidationMessage('Masukkan nama penerima!');
                return false;
            }
            if (!amount || amount <= 0) {
                Swal.showValidationMessage('Masukkan jumlah yang valid!');
                return false;
            }
            return { recipient, amount };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { recipient, amount } = result.value;
            const currentBalance = parseInt(localStorage.getItem('balance'));
            if (amount > currentBalance) {
                Swal.fire('Gagal!', 'Saldo tidak mencukupi.', 'error');
                return;
            }
            const newBalance = currentBalance - amount;
            localStorage.setItem('balance', newBalance.toString());
            updateBalance();
            Swal.fire('Berhasil!', `Anda telah mengirim Rp ${amount.toLocaleString('id-ID')} ke ${recipient}.`, 'success');
        }
    });
});
