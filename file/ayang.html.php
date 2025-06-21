<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spesial Untuk Ayang ❤️</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Romantic Dawn (Background: #FFF7F5, Text: #4B5563, Accent: #F43F5E) -->
    <!-- Application Structure Plan: The application is designed as an interactive "digital card" generator. Instead of displaying a static list, it presents one pick-up line at a time within a central card. This focuses the user's attention, making each message feel more personal and impactful. Navigation is handled by 'Next' and 'Previous' buttons, creating a simple and intuitive user flow. This structure was chosen to transform the passive act of reading a list into an engaging and romantic experience, mimicking the act of opening a series of love notes. -->
    <!-- Visualization & Content Choices: Report Info: Six text-based pick-up lines. Goal: To inform and create an emotional connection. Viz/Presentation: Structured HTML/CSS styled as a card to hold the text. The text is vertically and horizontally centered using a table element as per user request. Interaction: JavaScript powers 'Next'/'Previous' buttons to cycle through an array of the lines, updating the table cell's text dynamically. A counter shows progress. Justification: This method is ideal for sequential, text-heavy content where the goal is emotional engagement. SweetAlert2 is added for a final, conclusive message. Library/Method: Vanilla JavaScript, HTML Table for layout. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <!-- Cr by Rayden -->
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #FFF7F5;
        }
        .card {
            background-color: white;
            transition: all 0.5s ease-in-out;
            transform-style: preserve-3d;
        }
        .card-face {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .card.is-flipped {
            transform: rotateY(180deg);
        }
        .card-face-back {
            transform: rotateY(180deg);
        }
        .heart-beat {
            animation: heartBeat 1.5s infinite ease-in-out;
        }
        @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4">

    <main id="appContainer" class="w-full max-w-md mx-auto">
        <div id="welcomeScreen" class="text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hai Ayang ❤️</h1>
            <p class="text-gray-600 mb-8">Aku punya beberapa surat cinta spesial buat ayang. Buka satu-satu ya!</p>
            <button id="startButton" class="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Klik Di Sini
            </button>
        </div>

        <div id="gombalanScreen" class="hidden">
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Surat Cinta Untuk Ayang</h2>
                <p id="counter" class="text-sm text-gray-500 mt-1"></p>
            </div>

            <div id="cardContainer" class="relative" style="perspective: 1000px;">
                <div id="card" class="card w-full h-64 md:h-72 rounded-2xl shadow-xl p-6">
                    <div class="card-face card-face-front absolute top-0 left-0 w-full h-full p-6">
                       <table class="w-full h-full">
                           <tbody>
                               <tr>
                                   <td id="gombalanText" class="text-lg md:text-xl text-gray-700 align-middle text-center">
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                    </div>
                     <div class="card-face card-face-back absolute top-0 left-0 w-full h-full p-6">
                        <table class="w-full h-full">
                           <tbody>
                               <tr>
                                   <td id="gombalanTextBack" class="text-lg md:text-xl text-gray-700 align-middle text-center">
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-center mt-8">
                <button id="prevButton" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
                    Sebelumnya
                </button>
                <span class="text-rose-500 text-3xl heart-beat">❤️</span>
                <button id="nextButton" class="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
                    Lanjut
                </button>
            </div>
        </div>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const gombalanData = [
                "Ayang tahu nggak bedanya ayang sama KTP? Kalau KTP berlakunya seumur hidup, kalau cinta aku ke ayang itu selamanya.",
                "Orang bilang pelangi itu indah, tapi itu karena mereka belum pernah lihat senyum ayang. Buatku, senyum ayang jauh lebih indah dari pelangi mana pun.",
                "Cita-citaku dulu mau jadi dokter, terus ganti jadi arsitek. Tapi setelah ketemu ayang, cita-citaku cuma satu: membahagiakan ayang setiap hari.",
                "Kalau lihat senyum ayang, aku jadi curiga. Jangan-jangan orang tua ayang pengusaha gula ya? Soalnya senyum ayang manisnya kebangetan.",
                "Ayang itu seperti tombol *refresh* di laptop. Setiap kali aku lelah atau sedih, lihat ayang sebentar saja langsung bikin semangat lagi.",
                "Aku nggak butuh ramalan bintang buat tahu masa depanku. Cukup lihat mata ayang, aku yakin masa depanku cerah dan penuh cinta."
            ];

            const welcomeScreen = document.getElementById('welcomeScreen');
            const gombalanScreen = document.getElementById('gombalanScreen');
            const startButton = document.getElementById('startButton');
            
            const card = document.getElementById('card');
            const gombalanText = document.getElementById('gombalanText');
            const gombalanTextBack = document.getElementById('gombalanTextBack');
            const counter = document.getElementById('counter');
            
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');

            let currentIndex = 0;
            let isFlipped = false;

            function showGombalan(index) {
                if (card.classList.contains('is-flipped')) {
                    gombalanText.innerHTML = gombalanData[index];
                } else {
                    gombalanTextBack.innerHTML = gombalanData[index];
                }

                card.classList.toggle('is-flipped');
                isFlipped = !isFlipped;
                
                counter.textContent = `Surat Cinta ${index + 1} dari ${gombalanData.length}`;
            }

            function showFinalMessage() {
                Swal.fire({
                    title: 'Satu Pesan Terakhir... ❤️',
                    html: 'Semua gombalan tadi cuma pemanasan. Yang paling tulus dan serius adalah: <strong>Aku sayang banget sama ayang.</strong>',
                    icon: 'success',
                    confirmButtonText: 'Aku juga sayang ayang!',
                    confirmButtonColor: '#F43F5E'
                }).then((result) => {
                    if (result.isConfirmed) {
                        currentIndex = 0;
                        showGombalan(0);
                    }
                });
            }
            
            startButton.addEventListener('click', () => {
                welcomeScreen.classList.add('hidden');
                gombalanScreen.classList.remove('hidden');
                
                gombalanTextBack.innerHTML = gombalanData[currentIndex];
                showGombalan(currentIndex);
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex === gombalanData.length - 1) {
                    showFinalMessage();
                } else {
                    currentIndex++;
                    showGombalan(currentIndex);
                }
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + gombalanData.length) % gombalanData.length;
                showGombalan(currentIndex);
            });
        });
    </script>

</body>
</html>
