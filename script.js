const btnStart = document.querySelector("#start");
const questoesContainer = document.querySelector(".container-quiz");
const respostas = document.querySelector(".respostas");
const questao = document.querySelector(".questao");

let usuarioNome; // Adicionado para armazenar o nome do usuário
let acertos = 0; // Adicionado para contar a quantidade de respostas corretas

let aux = 0;
usuarioNome = prompt("Digite seu nome:")
btnStart.addEventListener("click", start);

function start() {
    btnStart.classList.add("hide");
    questoesContainer.classList.remove("hide");
    proximaPergunta();
}

function proximaPergunta() {
    //remover todos elementos filhos do elemento pai
    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild);
    }
    questao.textContent = questao[aux].pergunta;
    questao[aux].opcao.forEach(opcoes => {
        const botao = document.createElement("button");
        botao.classList.add("btn_resposta");
        botao.textContent = opcoes;
        if (opcoes === questao[aux].resposta) {
            botao.classList.add("correto");
        }
        respostas.appendChild(botao);

        botao.addEventListener("click", opcaoSelecionada);
    });
}


function opcaoSelecionada(clicado) {
    const opcaoClicada = clicado.target;
    const textoOpcaoClicada = opcaoClicada.textContent;
    const respostaCorreta = questao[aux].resposta;

    if (textoOpcaoClicada === respostaCorreta) {
        document.body.classList.add("correto");
        acertos++;
    } else {
        document.body.classList.add("incorreto");
    }

    document.querySelectorAll(".btn").forEach(opcaoBotao => {

        if (opcaoBotao === respostaCorreta) {
            document.classList.add("correto");
        } else {
            document.classList.add("incorreto");
        }
    });
    if (aux < questao.length - 1) {
        aux++;
        proximaPergunta();
    } else {
        // Exibir resultado final com nome do usuário e quantidade de acertos
        alert(
            `Quiz concluído, ${ usuarioNome }!\nVocê acertou ${ acertos } de ${ questao.length } perguntas.`
        );
    }
}






const questoes = [
    {
        pergunta: "Qual é a função do comando console.log()",
        resposta: "C. Exibe mensagem no Console do navegador.",
        opcao: [
            "A. Realizar uma operação matemática.",
            "B. Um sistema operacional.",
            "C. Exibe mensagem no Console do navegador.",
            "D. Criar uma variável."
        ]
    },
    {
        pergunta: "O que é um array em JavaScript?",
        resposta: "C. Um tipo de variável que armazena múltiplos valores em uma única variável.",
        opcao: [
            "A. Um tipo de variável que armazena apenas números.",
            "B. Um tipo de variável que armazena apenas strings.",
            "C. Um tipo de variável que armazena múltiplos valores em uma única variável.",
            "D. Nenhuma das alternativas anteriores."
        ]
    },
    {
        pergunta: "O que é JavaScript?",
        resposta: "A. Uma linguagem de programação orientada objetos.",
        opcao: [
            "A. Uma linguagem de programação orientada objetos.",
            "B. Um sistema operacional.",
            "C. Um editor de texto.",
            "D. Um banco de dados."
        ]
    },
    {
        pergunta: "Qual é a diferença entre as estruturas de repetição 'while' e 'do while' em programação?",
        resposta: "B. O 'while' verifica a condição antes de executar o bloco de código, enquanto o 'do while' executa pelo menos uma vez.",
        opcao: [
            "A. O 'while' executa o bloco de código pelo menos uma vez, enquanto o 'do while' verifica a condição antes de executar.",
            "B. O 'while' verifica a condição antes de executar o bloco de código, enquanto o 'do while' executa pelo menos uma vez.",
            "C. O 'while' e o 'do while' executam o bloco de código pelo menos uma vez.",
            "D. O 'while' e o 'do while' verificam a condição antes de executar o bloco de código."

        ]
    },
    {
        pergunta: "Qual é a finalidade da estrutura de repetição 'for' em programação?",
        resposta: "D. Iterar sobre uma sequência de valores conhecidos.",
        opcao: [
            "A. Executar um bloco de código uma única vez.",
            "B. Verificar uma condição antes de executar um bloco de código.",
            "C. Executar um bloco de código repetidamente até que uma condição seja falsa.",
            "D. Iterar sobre uma sequência de valores conhecidos."

        ]
    },
    {
        pergunta: "Qual é a finalidade da validação de dados em programação?",
        resposta: "C. Verificar se os dados inseridos pelo usuário são válidos e consistentes.",
        opcao: [
            "A. Gerar valores aleatórios para testes.",
            "B. Exibir mensagens de erro na interface do usuário.",
            "C. Verificar se os dados inseridos pelo usuário são válidos e consistentes.",
            "D. Armazenar os dados em um banco de dados."
        ]
    },

]