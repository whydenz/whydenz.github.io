let score = 0;
let currentQuestionIndex = 0;

// Daftar pertanyaan dan jawaban
const questions = [
    {
        question: "Apa nama generik dari obat yang digunakan untuk mengatasi demam?",
        choices: ["Ibuprofen", "Paracetamol", "Amoxicillin", "Simvastatin"],
        answer: "Paracetamol"
    },
    {
        question: "Obat apa yang biasa digunakan untuk infeksi bakteri?",
        choices: ["Aspirin", "Amoxicillin", "Loratadine", "Metformin"],
        answer: "Amoxicillin"
    },
    {
        question: "Simvastatin digunakan untuk?",
        choices: ["Mengontrol gula darah", "Mengurangi tekanan darah", "Mengontrol kolesterol", "Mengobati infeksi"],
        answer: "Mengontrol kolesterol"
    },
    {
        question: "Apa fungsi utama dari Metformin?",
        choices: ["Mengobati diabetes", "Mengurangi demam", "Menyembuhkan infeksi", "Menghilangkan rasa nyeri"],
        answer: "Mengobati diabetes"
    }
];

// Fungsi untuk memuat pertanyaan berikutnya
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;

        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = ''; // Hapus pilihan sebelumnya

        currentQuestion.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary';
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesDiv.appendChild(button);
        });
    } else {
        // Jika semua pertanyaan telah dijawab
        Swal.fire({
            title: 'Game Selesai!',
            text: `Skor Akhir Anda: ${score}/${questions.length}`,
            icon: 'success',
            confirmButtonText: 'Main Lagi'
        }).then(() => {
            resetGame();
        });
    }
}

// Fungsi untuk memeriksa jawaban
function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
        score++;
        Swal.fire({
            title: 'Benar!',
            text: 'Jawaban Anda benar!',
            icon: 'success',
            confirmButtonText: 'Lanjut'
        });
    } else {
        Swal.fire({
            title: 'Salah!',
            text: `Jawaban yang benar adalah ${currentQuestion.answer}.`,
            icon: 'error',
            confirmButtonText: 'Lanjut'
        });
    }

    document.getElementById('score').textContent = `Skor: ${score}`;
    currentQuestionIndex++;
}

// Fungsi untuk melanjutkan ke soal berikutnya
function nextQuestion() {
    loadQuestion();
}

// Fungsi untuk mereset permainan
function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = `Skor: ${score}`;
    loadQuestion();
}

// Memulai game dengan pertanyaan pertama
loadQuestion();
