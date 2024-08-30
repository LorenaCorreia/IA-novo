const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial é treinada por meio de algoritmos de aprendizagem de máquina, que permitem que os sistemas analisem dados e identifiquem tendências e padrões. Com base nos exemplos fornecidos, a inteligência artificial ajusta seus modelos e melhora o desempenho ao longo do tempo.. Oque você acha disso?",
        alternativas: [
            {
                texto: "Isso é verdade!",
                afirmacao: "Eu sei informações sobre o IA"
            },
            {
                texto: "Isso é mentira!",
                afirmacao: "Eu não sei muito sobre o IA, mas acredito que isso seja falso"
            }
        ]
    },
    {
        enunciado: "À medida que a tecnologia avança, é provável que ocorram mudanças no mercado de trabalho, e alguns empregos iram acabar, mas também surgirão novas oportunidades de emprego relacionadas à IA.",
        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "Tenho medo da IA"
            },
            {
                texto: "Isso é fantástico",
                afirmacao: "Acredito que o IA é muito impressionante"
            }
        ]
    },
    {
        enunciado: "O IA talvez não seja seguro, á medida que o sistema se tornam mais autônomos, é obrigatório garantir que eles sejam seguros, abordando questões como privacidade, proteção contra ataques cibernéticos e que o sistema seja com éticas e justo.",
        alternativas: [
            {
                texto: "Tenho medo que a IA abranja o mundo, e de algum jeito afete o mundo e as pessoas. ",
                afirmacao: "Sou preocupada com isso"
            },
            {
                texto: "Acredito que a IA vai melhorar cada vez mais, e sendo assim melhorar nosso mundo.",
                afirmacao: "Sou confiante que a IA é muito boa para o mundo"
            }
        ]
    },
    {
        enunciado: "Você acha que o IA prejudica as crianças e adoslescentes, vai ajudar ou atrapalhar eles futuramentes?",
        alternativas: [
            {
                texto: "Sim, irá prejudicar.",
                afirmacao: "Prejudicara demais"
            },
            {
                texto: "Não, ajuda no desenvolvimento deles futuramente.",
                afirmacao: "Ajudará muito."
            }
        ]
    },
    {
        enunciado: "Você gostaria de fazer algum curso sobre IA, para futuramente trabalhar com isso? ",
        alternativas: [
            {
                texto: "Sim, adoraria fazer curso sobre IA.",
                afirmacao: "Acho que isso me ajudaria financeiramente"
            },
            {
                texto: "Não, não gosto de mexer com tecnologia",
                afirmacao: "Não faria nenhum curso, perca de tempo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
