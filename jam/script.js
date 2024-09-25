// Fungsi untuk memperbarui waktu setiap detik
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Fungsi untuk menampilkan waktu saat ini dengan SweetAlert
function showCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    Swal.fire({
        title: 'Waktu Saat Ini',
        text: `Sekarang jam ${formattedTime}`,
        icon: 'info',
        confirmButtonText: 'OK'
    });
}
