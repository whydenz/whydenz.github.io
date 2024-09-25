let score = 0;
let currentQuestion = {};
let timeLeft = 100;
let timer;

// Fungsi untuk membuat soal matematika acak
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question;
    let answer;

    if (operator === '+') {
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
    } else if (operator === '-') {
        question = `${num1} - ${num2}`;
        answer = num1 - num2;
    } else if (operator === '*') {
        question = `${num1} * ${num2}`;
        answer = num1 * num2;
    } else if (operator === '/') {
        question = `${num1} / ${num2}`;
        answer = (num1 / num2).toFixed(2); // Pembagian 2 angka desimal
    }

    currentQuestion = {
        question: question,
        answer: answer
    };

    document.getElementById('question').textContent = `Soal: ${currentQuestion.question}`;
}

// Fungsi untuk mengecek jawaban
function checkAnswer(event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
}

// Fungsi untuk mengirim jawaban
function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');

    if (userAnswer === parseFloat(currentQuestion.answer)) {
        feedback.textContent = 'Benar!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = `Salah! Jawaban yang benar adalah ${currentQuestion.answer}`;
        feedback.style.color = 'red';
    }

    document.getElementById('score').textContent = `Skor: ${score}`;
    document.getElementById('answer').value = '';
    resetTimer();
    generateQuestion();
}

// Fungsi untuk memulai atau mereset timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById('timer').textContent = `Waktu: ${timeLeft} detik`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Waktu: ${timeLeft} detik`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Waktu habis! Soal baru akan diberikan.');
            generateQuestion();
            resetTimer();
        }
    }, 1000);
}

// Memulai game dengan soal pertama
generateQuestion();
resetTimer();
