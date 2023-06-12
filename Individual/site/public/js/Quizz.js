const questions = [
    {
        question: "Em que ano ocorreu a Revolução Industrial?",
        answers: [
            { text: "1790", correct: false },
            { text: "1750", correct: false },
            { text: "1760", correct: true },
            { text: "1740", correct: false },
        ]
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        answers: [
            { text: "Músculo", correct: false },
            { text: "Pulmão", correct: false },
            { text: "Estomago", correct: false },
            { text: "Pele", correct: true },
        ]
    },
    {
        question: "Qual é o país mais antigo do mundo?",
        answers: [
            { text: "Japão", correct: true },
            { text: "Grécia", correct: false },
            { text: "Itália", correct: false },
            { text: "Egito", correct: false },
        ]
    },
    {
        question: "Quem inventou a lâmpada ?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Nicolas Tesla", correct: false },
            { text: "Thomas Edson", correct: true },
            { text: "Leonardo Da Vinci", correct: false },
        ]
    },
    {
        question: "Quem inventou o avião ?",
        answers: [
            { text: "Santos Dumont", correct: true },
            { text: "Gilberto Gil", correct: false },
            { text: "Thomas Edson", correct: false },
            { text: "Leonardo Da Vinci", correct: false },
        ]
    },
    {
        question: "Quais são os planetas do sistema solar?",
        answers: [
            { text: "Terra, Vênus, Saturno, Urano, Júpiter, Márcia, Netuno e Mercúrio", correct: false },
            { text: "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno e Mercúrio ", correct: true },
            { text: "Terra e Sol, Apenas", correct: false },
            { text: "Terra, Vênus, Saturno, Urano, Júpiter, Apenas", correct: false },
        ]
    },
    {
        question: "Qual o livro mais vendido do mundo?",
        answers: [
            { text: "Atlas", correct: false },
            { text: "Bíblia", correct: true },
            { text: "Pequeno Príncipe", correct: false },
            { text: "O Código Da Vinci", correct: false },
        ]
    },
    {
        question: "Qual o País que foi atingido pelo meteóro que extinguiu os dinossauros?",
        answers: [
            { text: "México", correct: true },
            { text: "Angola", correct: false },
            { text: "Brasil", correct: false },
            { text: "Argentina", correct: false },
        ]
    },
    {
        question: "Qual o maior planeta do sistema solar?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Saturno", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Marte", correct: false },
        ]
    },
    {
        question: "Se, quando batida a cabeça, surge um calombo; quem descobriu o Brasil foi:",
        answers: [
            { text: "Cristóvão Colombo", correct: false },
            { text: "Dom Pedro II", correct: false },
            { text: "Vasco da Gama", correct: false },
            { text: "Pedro Álveres Cabral", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuizz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} em um total de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
    inserirPontuacao();
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuizz();
    }
})

startQuizz();

function inserirPontuacao() {
    var idUsuario = sessionStorage.ID_USUARIO;
    console.log("cheguei no inserir pontuação")
    fetch("/inserirPontos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario,
            pontuacaoUsuario: score
        })

    })
        .then(function (resposta) {
            console.log(resposta)
            console.log(`Id do usuario: ${idUsuario}, pontuação do usuário ${score}`)

        }).catch(function (erro) {
            console.log(erro);
        })

    console.log("saí do fetch")


    return false;

}
