
const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");
const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");
const divtextoPergunta = document.getElementById("textoperguntas");
const opcoesRespostas = document.getElementById("opcoesRespostas");
let indicePerguntas = 0
let pontos = 0

// Arrays
const perguntasQuiz = [ 
     {pergunta: "Qual é o maior deserto do mundo?", opcoes: ["Sahara", "Gobi", "Antártida", "Saara"], resposta:"Antártida"},
     {pergunta: "Qual é a capital do Brasil?", opcoes: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], resposta:"Brasília"},
     {pergunta: "Qual é a capital da Austrália?", opcoes: ["Sydney", "Melbourne", "Canberra", "Brisbane"], resposta:"Canberra"},
     {pergunta: "Qual é o país com maior população no mundo?", opcoes: ["China", "Índia", "Estados Unidos", "Indonésia"], resposta:"China"},
     {pergunta: "Qual a linha imaginária que atravessa o Brasil?", opcoes: ["Equador", "Trópico de Câncer", "Trópico de Capricórnio", "Meridiano de Greenwich"], resposta:"Equador"},
     {pergunta: "Qual o oceano que banha o Brasil?", opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"], resposta:"Atlântico"},
]


function iniciarjogo() {
    diviniciojogo.innerHTML = ""
    carregarQuestao(perguntasQuiz[indicePerguntas]);
}

function carregarQuestao(questao) {
    divtextoPergunta.textContent = questao.pergunta;

    // tornando a DIV das questões visível
    caixaUniQuizDiv.classList.add("active");

  questao.opcoes.forEach(opcoes => {  
    const botao = document.createElement("button");
    botao.textContent = opcoes;
    botao.classList.add("answer-btn");
    botao.addEventListener("click", () => validaresposta());
    opcoesRespostas.appendChild(botao);
})}

function carregarProximaQuestao(){
    indicePerguntas++;
    opcoesRespostas.innerHTML = ""; 
    if(indicePerguntas < perguntasQuiz.length) {
        carregarQuestao(perguntasQuiz[indicePerguntas]); 
    }
    else{
      alert("Fim do Quiz!");
    }
}
function validaresposta(){
   
}
