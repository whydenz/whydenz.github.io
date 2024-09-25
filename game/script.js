// Data pertanyaan dan jawaban
const questions = [
    {
        question: "Senyawa dengan ikatan tunggal antara atom karbon disebut?",
        answers: ["Alkana", "Alkena", "Alkuna"],
        correct: "Alkana"
    },
    {
        question: "Senyawa hidrokarbon dengan satu ikatan rangkap dua disebut?",
        answers: ["Alkana", "Alkena", "Alkuna"],
        correct: "Alkena"
    },
    {
        question: "Senyawa dengan satu ikatan rangkap tiga disebut?",
        answers: ["Alkana", "Alkena", "Alkuna"],
        correct: "Alkuna"
    },
    {
        question: "Apa nama senyawa CH₄?",
        answers: ["Metana", "Etena", "Etuna"],
        correct: "Metana"
    },
    {
        question: "Senyawa C₂H₄ adalah jenis?",
        answers: ["Alkana", "Alkena", "Alkuna"],
        correct: "Alkena"
    },
    {
        question: "Apa nama senyawa C₂H₂?",
        answers: ["Etuna", "Etana", "Etena"],
        correct: "Etuna"
    }
];

// Variabel untuk melacak skor dan pertanyaan saat ini
let currentQuestionIndex = 0;
let score = 0;

// Tampilkan skor awal
document.getElementById("score").innerHTML = `Skor: ${score}`;

// Fungsi untuk memuat pertanyaan
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Tampilkan pertanyaan
    document.getElementById("question").innerHTML = currentQuestion.question;
    
    // Tampilkan jawaban
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('div');
        button.classList.add('answer');
        button.innerHTML = answer;
        button.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(button);
    });
}

// Fungsi untuk memeriksa jawaban
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    let resultText = '';
    
    if (selectedAnswer === currentQuestion.correct) {
        resultText = "Benar!";
        score++;
    } else {
        resultText = `Salah! Jawaban yang benar adalah ${currentQuestion.correct}.`;
    }

    // Tampilkan hasil dan perbarui skor
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("score").innerHTML = `Skor: ${score}`;
    
    // Lanjutkan ke pertanyaan berikutnya setelah beberapa detik
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            document.getElementById("result").innerHTML = '';
            loadQuestion();
        } else {
            // Jika tidak ada pertanyaan lagi, tampilkan pesan akhir
            document.getElementById("question").innerHTML = "Game selesai!";
            document.getElementById("answers").innerHTML = '';
            document.getElementById("result").innerHTML = `Skor akhir Anda: ${score}`;
        }
    }, 2000);
}

// Muat pertanyaan pertama
loadQuestion();
