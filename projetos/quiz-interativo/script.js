const quizData = [
    {
        question: 'Em que ano o Fluminense Football Club foi fundado?',
        options: ['1902', '1904', '1908', '1912'],
        answer: 0
    },
    {
        question: 'Qual estádio é a casa do Fluminense?',
        options: ['Maracanã', 'São Januário', 'Engenhão', 'Nilton Santos'],
        answer: 0
    },
    {
        question: 'Qual é o mascote do Fluminense?',
        options: ['Urubu', 'Galo', 'Guerreirinho', 'Raposa'],
        answer: 2
    },
    {
        question: 'Quais são as cores do Fluminense?',
        options: ['Verde, Branco e Grená', 'Azul e Branco', 'Preto e Vermelho', 'Verde e Amarelo'],
        answer: 0
    },
    {
        question: 'Quantos títulos brasileiros o Fluminense possui?',
        options: ['1', '2', '4', '6'],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');

function showQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div class="question">${q.question}</div>
        <form id="quiz-form">
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="option" value="${i}">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
            <button type="submit">Enviar</button>
        </form>
        <div id="feedback"></div>
    `;
    document.getElementById('quiz-form').onsubmit = checkAnswer;
}

function checkAnswer(e) {
    e.preventDefault();
    const form = e.target;
    const selected = form.option.value;
    const feedback = document.getElementById('feedback');
    if (selected === undefined || selected === "") {
        feedback.textContent = 'Selecione uma opção!';
        feedback.className = 'feedback incorrect';
        return;
    }
    const correct = quizData[currentQuestion].answer;
    if (parseInt(selected) === correct) {
        feedback.textContent = 'Correto!';
        feedback.className = 'feedback correct';
        score++;
    } else {
        feedback.textContent = `Incorreto! Resposta certa: ${quizData[currentQuestion].options[correct]}`;
        feedback.className = 'feedback incorrect';
    }
    // Desabilita opções
    Array.from(form.elements['option']).forEach(r => r.disabled = true);
    // Troca botão para "Próxima" ou "Ver resultado"
    const btn = form.querySelector('button');
    btn.textContent = (currentQuestion < quizData.length - 1) ? 'Próxima' : 'Ver resultado';
    btn.onclick = nextQuestion;
    form.onsubmit = null;
}

function nextQuestion(e) {
    e.preventDefault();
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.innerHTML = `
        <div class="score">Você acertou ${score} de ${quizData.length} perguntas!<br> Saudações Tricolores!</div>
        <button onclick="window.location.reload()">Tentar novamente</button>
    `;
}

showQuestion(); 