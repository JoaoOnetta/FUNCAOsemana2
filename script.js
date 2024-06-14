const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
    enunciado: "Qual desses não é um exemplo de IA?",
    alternativas: [
        "Assistente Virtual",
        "Rede Social"
    ]
   },
  
   {
    enunciado: "Qual é o papel da IA na automação de processos?",
    alternativas: [
        "Substituir completamente os humanos",
        "Auxiliar os humanos em tarefas repetitivas"
    ]
   },
   {
    enunciado: "O que significa a sigla IA?",
    alternativas: [
        "Instituto Ambiental",
        "Inteligência Artificial"
    ]
   },
   {
    enunciado: "A ética na IA trata de",
    alternativas: [
        "Garantir que a IA seja usada de forma responsável e ética.",
        "Desenvolver IA sem considerar suas implicações éticas."
    ]
   },
   {
    enunciado: "IA fraca se refere a:",
    alternativas: [
        "IA projetada para uma tarefa específica.",
        "IA com habilidades sobrenaturais."
    ]
   }, 
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
