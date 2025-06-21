<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Cr by Rayden -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spesial Untuk SENGGG ❤️</title>
    
    <!-- Memanggil Tailwind CSS untuk styling yang modern -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Memanggil SweetAlert2 untuk pop-up yang interaktif -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        /* Menggunakan font dari Google Fonts agar lebih estetik */
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;600&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
        }

        /* Memberikan style khusus untuk judul utama */
        .title-special {
            font-family: 'Pacifico', cursive;
        }
    </style>
</head>
<body class="bg-pink-50 flex items-center justify-center min-h-screen">

    <div class="text-center p-8 md:p-12 bg-white rounded-2xl shadow-xl max-w-lg mx-4">
        <h1 class="title-special text-4xl text-pink-500 mb-4">Untuk SENGGG Tersayang</h1>
        <p class="text-gray-600 mb-8">Aku punya beberapa hal yang pengen aku sampaikan ke kamu. Buka pesannya satu-satu ya!</p>
        
        <!-- Tombol utama untuk memulai rangkaian gombalan -->
        <button id="mulaiGombalan" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
            Mulai Baca
        </button>
    </div>

    <script>
        // Menambahkan event listener pada tombol
        document.getElementById('mulaiGombalan').addEventListener('click', async function() {
            
            // Kumpulan gombalan dalam bentuk array of objects
            const listGombalan = [
                {
                    title: 'Pertama...',
                    text: 'SENGGG, kamu itu kayak Google ya? Soalnya semua yang aku cari selama ini ada di kamu.',
                },
                {
                    title: 'Kedua...',
                    text: 'Aku rela ikut lomba lari keliling dunia, asalkan SENGGG yang jadi garis finisnya.',
                },
                {
                    title: 'Ketiga...',
                    text: 'Tau gak bedanya kamu sama bintang? Bintang cuma bisa hiasin langit malam, tapi kamu hiasin seluruh hidup aku.',
                },
                {
                    title: 'Keempat...',
                    text: 'Aku tuh gak butuh peta atau kompas, SENGGG. Soalnya arah tujuanku udah pasti, ke hati kamu.',
                    imageUrl: 'https://i.pinimg.com/originals/f5/a8/12/f5a812821363673b171b31558005b8da.gif', // GIF kompas
                    imageHeight: 150,
                },
                {
                    title: 'Dan yang Terakhir...',
                    text: 'Mungkin aku bukan orang pertama di hidup kamu, tapi aku janji mau jadi yang terakhir buat kamu, SENGGG.',
                }
            ];

            // Looping untuk menampilkan setiap gombalan secara berurutan
            for (let i = 0; i < listGombalan.length; i++) {
                // Menunggu setiap pop-up ditutup sebelum melanjutkan ke gombalan berikutnya
                await Swal.fire({
                    title: listGombalan[i].title,
                    text: listGombalan[i].text,
                    imageUrl: listGombalan[i].imageUrl,
                    imageHeight: listGombalan[i].imageHeight,
                    confirmButtonText: 'Lanjut ❤️',
                    confirmButtonColor: '#ec4899', // Warna pink
                    allowOutsideClick: false // Mencegah user menutup dengan klik di luar box
                });
            }

            // Pesan penutup setelah semua gombalan ditampilkan
            await Swal.fire({
                title: 'I Love You, SENGGG!',
                text: 'Makasih udah jadi alasanku buat tersenyum setiap hari. Jaga diri baik-baik ya.',
                imageUrl: 'https://i.pinimg.com/originals/e7/3a/8b/e73a8b76a6a0a8677f98e8210b37803a.gif', // GIF peluk
                imageHeight: 150,
                confirmButtonText: 'I Love You Too!',
                confirmButtonColor: '#ec4899'
            });

        });
    </script>

</body>
</html>
