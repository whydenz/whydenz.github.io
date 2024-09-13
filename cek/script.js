// script.js
document.getElementById('topUpForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil nilai dari form
  const userID = document.getElementById('userID').value;
  const game = document.getElementById('game').value;
  const nominal = document.getElementById('nominal').value;

  // Validasi sederhana
  if (!userID || !game || !nominal) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Harap lengkapi semua form!'
    });
  } else {
    // SweetAlert untuk konfirmasi top up
    Swal.fire({
      title: 'Konfirmasi Top Up',
      html: `User ID: <b>${userID}</b><br>Game: <b>${game}</b><br>Nominal: <b>${nominal}</b>`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Top Up Sekarang',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: `Top Up ${nominal} untuk ${game} telah berhasil!`
        });
        // Reset form setelah berhasil top up
        document.getElementById('topUpForm').reset();
      }
    });
  }
});
