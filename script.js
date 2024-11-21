const questions = [
    {
        question: "Qual é o nome desse quadro?",
        options: ["A Noite Estrelada", "A Ronda Noturna", "Mona Lisa", "O Sono"],
        answer: "A Noite Estrelada",
        image: "noite.jpg"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci",
        image: "img/monalisa.jpg"
    },
    {
        question: "Qual é o nome desse quadro?",
        options: ["Atlântico", "Pacífico", "Nascer do Sol", "A Primavera"],
        answer: "Pacífico",
        image: "img/nascer.jpg"
    },
    {
        question: "Quem é esse pintor?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Donatello"],
        answer: "Pablo Picasso",
        image: "img/pablo.jpg"
    },
    {
        question: "Em que ano morreu Vincent van Gogh?",
        options: ["1876", "1890", "1853", "1987"],
        answer: "1890",
        image: "img/vincent.jpg"
    },
    { 

        question: "O que é um sistema operacional?",
        options: ["Um software usado para criar imagens", "Um programa que gerencia hardware e recursos do computador", "Um dispositivo de entrada do computador", "Um programa de navegação na internet"],
        answer: "Um programa que gerencia hardware e recursos do computador", 
        image: "img/sistema.jpg"
    },
    {
        question: "Qual é a principal função de um antivírus?",
        options: ["Aumentar a velocidade do computador", "Proteger contra vírus e malwares", "Armazenar documentos", "Melhorar a qualidade gráfica do sistema"],
        answer: "Proteger contra vírus e malwares", 
        image: "img/antivirus.jpg"

    },   
    {
        question: "O que significa a sigla URL?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Response Link", "Universal Response Locator"],
        answer: "Uniform Resource Locator", 
        image: "img/url.jpg"
    },
    {
        question: "Qual das seguintes opções é um tipo de memória volátil?",
        options: ["HD", "SSD", "RAM", "CD"],
        answer: "RAM", 
        image: "img/ram.jpg"
    },
    {
        question: "O que é o nuvem ,cloud computing, em termos de tecnologia?",
        options: ["Um tipo de antivírus", "Armazenamento de dados e serviços online", "Um sistema de backup local", "Um programa de e-mail"],
        answer: "Armazenamento de dados e serviços online", 
        image: "img/nuvem.jpg"
    },
    {

        question: "Quem pintou o Abaporu?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Gilmar Ribeiro", "Tarsila do Amaral"],
        answer: "Tarsila do Amaral", 
        image: "img/Abaporu.jpg"
    },
    {

        question: "Quem pintou O Grito?",
        options: ["Pablo Picasso", "Gilmar Ribeiro", "Edrvard Munch", "Leonardo Dicaprio"],
        answer: "Edvard Mungh", 
        image: "img/ogrito.jpg"
     },
     {

        question: "Em que cidade e museu podemos ver o quadro A Noite Estrelada, de Vincent van Gogh?",
        options: ["Paris, no louvre", "Nova York,no MOMA", "Alemanha, no EaRA", "Uberaba, no Museu De arte Natural"],
        answer: "nova York, no MOMA", 
        image: "img/museu.jpg"
     },
     {
        question: "Qual é o nome desse quadro?",
        options: ["A Persistência da Memória", "Metamorfose de Narciso", "Os elefantes", "O relógio"],
        answer: "A Persistência da Memória", 
        image: "img/salvador.jpg"
      },
      {

        question: "Quem é esse pintor?",
        options: ["Gilmar Ribeiro", "Pablo Picasso", "Salvador Dalí", "Miquelangello"],
        answer: "Salvador Dalí", 
        image: "img/dali.jpg"
      },
      {
    
        question: "Qual é o formato de arquivo padrão para documentos do Microsoft Word?",
        options: [".jpg", ".pdf", ".docx", ".exe"],
        answer: ".pdf", 
        image: "img/pdf.jpg"
      },
      {

        question: "Qual é a função de um firewall em um computador?",
        options: ["Proteger contra vírus", "Impedir o acesso não autorizado", "Melhorar velocidade da internet", "Armazenar arquivos temporários"],
        answer: "Impedir o acesso não autorizado à rede", 
        image: "img/fire.jpg"
      },
      {

        question: "Qual é o nome do programa mais utilizado para navegar na internet?",
        options: ["Photoshop", "WordPad", "Google Chrome", "Excel"],
        answer: "Google Chrome", 
        image: "img/chrome.jpg"
      },
      {
       
        question: "O que é um backup?",
        options: ["Photoshop", "WordPad", "Google Chrome", "Excel"],
        answer: "Google Chrome", 
        image: "img/chrome.jpg"
       }
];

let currentQuestionIndex = 0; // Corrigido para iniciar em 0
let score = 0; // Corrigido para iniciar em 0
let timer;
let timeLeft = 20;

const usernameInput = document.getElementById('username');
const startButton = document.getElementById('startButton');
const quizScreen = document.getElementById('quizScreen');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const timerDisplay = document.getElementById('timeLeft');
const nextButton = document.getElementById('nextButton');
const resultScreen = document.getElementById('resultScreen');
const finalScoreDisplay = document.getElementById('finalScore');
const userNameDisplay = document.getElementById('userNameDisplay');
const userNameDisplayResult = document.getElementById('userNameDisplayResult');
const restartButton = document.getElementById('restartButton');
const questionImage = document.getElementById('questionImage');
const currentScoreDisplay = document.getElementById('currentScore');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', loadNextQuestion);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('welcomeScreen').classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = username;
    userNameDisplayResult.textContent = username;
    score = 0; // Iniciar a pontuação em 0
    currentQuestionIndex = 0; // Iniciar o índice da pergunta em 0
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image;
    optionsContainer.innerHTML = '';
    timeLeft = 20;
    timerDisplay.textContent = timeLeft;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null); // Se o tempo esgotar, passa a questão sem resposta
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score += 20 + timeLeft; // Calcula pontos com base no tempo restante
    }
    currentScoreDisplay.textContent = score;
    nextButton.classList.remove('hidden');
    currentQuestionIndex++;
}

function endQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    usernameInput.value = '';
    currentScoreDisplay.textContent = 0; // Resetando a pontuação para 0
}
