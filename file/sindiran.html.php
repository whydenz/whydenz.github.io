<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sindiran Mantan</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <!-- Chosen Palette: Purple Dawn -->
    <!-- Application Structure Plan: Struktur aplikasi tetap menggunakan pendekatan 'single-card generator' dengan alur berantai. Namun, presentasi visualnya dirombak total untuk meningkatkan pengalaman pengguna. Desain baru berfokus pada estetika modern (gradien, glassmorphism, animasi halus) untuk membuat interaksi yang sederhana terasa lebih premium dan menarik. -->
    <!-- Visualization & Content Choices: 
        Report Info: 5 kutipan sindiran untuk mantan.
        Goal: Menyajikan konten teks berurutan dengan cara yang sangat menarik secara visual.
        Viz/Presentation Method: Alur tetap menggunakan SweetAlert berantai, namun UI utama dan gaya modal SweetAlert telah didesain ulang sepenuhnya. Kartu utama menggunakan efek 'glassmorphism' di atas latar belakang gradien animasi.
        Interaction: Pengguna menekan tombol yang didesain ulang untuk memulai alur. Setiap konfirmasi menampilkan modal berikutnya.
        Justification: Peningkatan visual yang signifikan ini bertujuan untuk memberikan "wow factor" dan membuat pengalaman lebih berkesan. Estetika yang lebih baik dapat meningkatkan persepsi kualitas dan kesenangan pengguna.
        Library/Method: HTML, Tailwind CSS, Vanilla JavaScript, dan SweetAlert2.
        -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f5f3ff, #eef2ff);
            overflow: hidden;
        }
        
        .main-container::before,
        .main-container::after {
            content: '';
            position: absolute;
            filter: blur(80px);
            opacity: 0.8;
            border-radius: 50%;
            z-index: -1;
            animation: float 15s infinite ease-in-out;
        }

        .main-container::before {
            background-color: #c4b5fd;
            width: 300px;
            height: 300px;
            top: 10%;
            left: 15%;
        }

        .main-container::after {
            background-color: #a5b4fc;
            width: 250px;
            height: 250px;
            bottom: 15%;
            right: 10%;
            animation-delay: -7s;
        }

        @keyframes float {
            0% { transform: translateY(0px) translateX(0px) scale(1); }
            50% { transform: translateY(-30px) translateX(20px) scale(1.1); }
            100% { transform: translateY(0px) translateX(0px) scale(1); }
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.5);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transform: perspective(1000px);
            transition: transform 0.4s ease;
        }

        .glass-card:hover {
            transform: translateZ(20px) rotateX(2deg) rotateY(2deg);
        }

        .action-button {
            background: linear-gradient(45deg, #8b5cf6, #6366f1);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .action-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 7px 25px rgba(139, 92, 246, 0.4);
        }
        
        .swal2-popup {
            border-radius: 1.5rem !important;
            background: rgba(255, 255, 255, 0.8) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            backdrop-filter: blur(10px) !important;
        }

        .swal2-title {
            color: #4338ca !important;
        }

        .swal2-html-container {
            color: #374151 !important;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4 main-container">

    <div class="w-full max-w-md text-center">
        
        <main id="generator-section" class="w-full">
            <div class="glass-card rounded-3xl p-8 md:p-12 min-h-[250px] flex items-center justify-center w-full">
                <p id="sindiran-text" class="text-xl md:text-2xl font-bold text-slate-800 tracking-wide">
                    Siap untuk beraksi?
                </p>
            </div>
    
            <button id="generate-btn" class="action-button mt-10 text-white font-bold tracking-wider py-4 px-10 rounded-full text-lg">
                Gasss!!! 🚀
            </button>
        </main>
        
    </div>

    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        // Script created by Rayden
      // gausah ngaku-ngaku apalagi claim

        const sindiranData = [
            "Makasih ya udah pergi. Standar kebahagiaanku jadi naik drastis.",
            "Liat seleramu yang sekarang, aku jadi sadar. Dulu itu kamu lagi beruntung banget bisa sama aku.",
            "Dulu aku kira kehilangan kamu itu sebuah tragedi. Ternyata cuma unsubscribe dari drama murahan.",
            "Satu-satunya hal positif dari hubungan kita adalah sekarang aku jadi tahu persis tipe orang yang harus dihindari.",
            "Maaf, kita pernah kenal? Memori HP-ku lebih bagus dari ingatanku soal masa lalu yang nggak penting."
        ];

        const generateButton = document.getElementById('generate-btn');

        function showSindiran(index) {
            if (index >= sindiranData.length) {
                Swal.fire({
                    title: 'Selesai!',
                    text: 'makasih loh udah dibaca! 😂',
                    icon: 'success',
                    iconColor: '#6366f1',
                    confirmButtonText: 'Mantap!',
                    customClass: {
                        confirmButton: 'action-button text-white font-bold py-2 px-6 rounded-full',
                        popup: 'glass-card'
                    },
                    buttonsStyling: false
                });
                return; 
            }

            const currentSindiran = sindiranData[index];

            Swal.fire({
                icon: 'info',
                iconColor: '#8b5cf6',
                html: `<p class="text-xl font-medium text-slate-700">${currentSindiran}</p>`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: 'Oke, Kena Banget!',
                confirmButtonAriaLabel: 'Next',
                customClass: {
                    confirmButton: 'action-button text-white font-bold py-2 px-6 rounded-full',
                    popup: 'glass-card'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    showSindiran(index + 1);
                }
            });
        }

        generateButton.addEventListener('click', () => {
            showSindiran(0);
        });

    </script>
</body>
</html>
