// script.js

document.addEventListener('DOMContentLoaded', () => {
    const topUpButtons = document.querySelectorAll('.top-up-btn');

    topUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameName = button.getAttribute('data-game');
            openTopUpModal(gameName);
        });
    });

    // Tombol Mulai Top Up di Hero Section
    const startTopUpBtn = document.getElementById('startTopUpBtn');
    startTopUpBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Pilih Game',
            input: 'select',
            inputOptions: {
                'Mobile Legends': 'Mobile Legends',
                'PUBG Mobile': 'PUBG Mobile',
                'Free Fire': 'Free Fire',
                'Valorant': 'Valorant',
                // Tambahkan lebih banyak game sesuai kebutuhan
            },
            inputPlaceholder: 'Pilih game Anda',
            showCancelButton: true,
            confirmButtonText: 'Lanjutkan',
            cancelButtonText: 'Batal',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value) {
                        resolve();
                    } else {
                        resolve('Anda perlu memilih sebuah game!');
                    }
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedGame = result.value;
                openTopUpModal(selectedGame);
            }
        });
    });
});

/**
 * Fungsi untuk membuka modal top-up
 * @param {string} gameName - Nama game yang dipilih
 */
function openTopUpModal(gameName) {
    Swal.fire({
        title: `Top Up ${gameName}`,
        html:
            `<input type="text" id="username" class="swal2-input" placeholder="Username ${gameName}">` +
            `<input type="number" id="amount" class="swal2-input" placeholder="Jumlah Top Up (Rp)">`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Top Up',
        cancelButtonText: 'Batal',
        preConfirm: () => {
            const username = document.getElementById('username').value.trim();
            const amount = parseInt(document.getElementById('amount').value);

            if (!username) {
                Swal.showValidationMessage('Username tidak boleh kosong!');
                return false;
            }

            if (isNaN(amount) || amount <= 0) {
                Swal.showValidationMessage('Masukkan jumlah top up yang valid!');
                return false;
            }

            return { username, amount };
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const { username, amount } = result.value;

            // Konfirmasi Detail Top Up
            Swal.fire({
                title: 'Konfirmasi Top Up',
                html: `
                    <p><strong>Game:</strong> ${gameName}</p>
                    <p><strong>Username:</strong> ${username}</p>
                    <p><strong>Jumlah:</strong> Rp ${amount.toLocaleString('id-ID')}</p>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Konfirmasi',
                cancelButtonText: 'Batal'
            }).then((confirmResult) => {
                if (confirmResult.isConfirmed) {
                    // Simulasi Proses Top Up
                    Swal.fire({
                        title: 'Memproses Top Up...',
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });

                    // Simulasi delay proses top up
                    setTimeout(() => {
                        Swal.fire(
                            'Sukses!',
                            `Top up ${amount.toLocaleString('id-ID')} untuk ${username} di ${gameName} berhasil dilakukan.`,
                            'success'
                        );
                    }, 2000);
                }
            });
        }
    });
}
