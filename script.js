const btnStart = document.querySelector("#start");
const questoesContainer = document.querySelector(".container-quiz");
const respostas = document.querySelector(".respostas");
const questao = document.querySelector(".questao");
const home = document.querySelector(".home");
const final = document.querySelector("#final");
const next = document.querySelector(".next-resposta");

let usuarioNome; // Adicionado para armazenar o nome do usuário
let acertos = 0;

let aux = 0;

btnStart.addEventListener("click", start);
next.addEventListener("click", proximaPergunta);

function start(){
	btnStart.classList.add("hide");
    home.classList.add("hide");
    usuarioNome = prompt("Digite seu nome:")
	questoesContainer.classList.remove("hide");
	proximaPergunta();
}

function proximaPergunta(){
	//remover todos elementos filhos do elemento pai
	while(respostas.firstChild){
		respostas.removeChild(respostas.firstChild);
	}

    document.body.removeAttribute("class");
    next.classList.add("hide");

	questao.textContent = questoes[aux].pergunta;
	questoes[aux].opcao.forEach(opcoes => {
		const botao = document.createElement("button");
		botao.classList.add("btn");
       
		botao.textContent = opcoes;
		if(opcoes === questoes[aux].resposta){
			botao.classList.add("correto");
		}
		respostas.appendChild(botao);

		botao.addEventListener("click", opcaoSelecionada);
	});
    
}

function opcaoSelecionada(clicado){
	const opcaoClicada = clicado.target;
	const textoOpcaoClicada = opcaoClicada.textContent;
	const respostaCorreta = questoes[aux].resposta;

	if(textoOpcaoClicada === respostaCorreta){
		document.body.classList.add("correto");
		acertos++; // Incrementar o contador de acertos
	}else{
		document.body.classList.add("incorreto");
	}

	
	document.querySelectorAll(".btn").forEach(opcaoBotao => {
        opcaoBotao.disabled = true;
	});

    next.classList.remove("hide");
    aux++;

    // Verificar se todas as perguntas foram respondidas
    if(aux === questoes.length){
        next.classList.add("hide");
        finalizar();
    }
}


function finalizar(){
    alert(`Parabéns ${usuarioNome}! Você finalizou o quiz com ${acertos} acertos de ${questoes.length} perguntas. Quiz finalizado`);
}





const questoes = [
    {
        pergunta: "Qual é a função do comando console.log()",
        resposta:"C. Exibe mensagem no Console do navegador.",
        opcao:[
            "A. Realizar uma operação matemática.",
            "B. Um sistema operacional.",
            "C. Exibe mensagem no Console do navegador.",
            "D. Criar uma variável."
        ]
    },
    {
        pergunta: "O que é um array em JavaScript?",
        resposta:"C. Um tipo de variável que armazena múltiplos valores em uma única variável.",
        opcao:[
            "A. Um tipo de variável que armazena apenas números.",
            "B. Um tipo de variável que armazena apenas strings.",
            "C. Um tipo de variável que armazena múltiplos valores em uma única variável.",
            "D. Nenhuma das alternativas anteriores."
        ]
    },
    {
        pergunta: "O que é JavaScript?",
        resposta:"A. Uma linguagem de programação orientada objetos.",
        opcao:[
            "A. Uma linguagem de programação orientada objetos.",
            "B. Um sistema operacional.",
            "C. Um editor de texto.",
            "D. Um banco de dados."
        ]
    },
    {
        pergunta: "Qual é a diferença entre as estruturas de repetição 'while' e 'do while' em programação?",
        resposta:"B. O 'while' verifica a condição antes de executar o bloco de código, enquanto o 'do while' executa pelo menos uma vez.",
        opcao:[
            "A. O 'while' executa o bloco de código pelo menos uma vez, enquanto o 'do while' verifica a condição antes de executar.",
            "B. O 'while' verifica a condição antes de executar o bloco de código, enquanto o 'do while' executa pelo menos uma vez.",
            "C. O 'while' e o 'do while' executam o bloco de código pelo menos uma vez.",
            "D. O 'while' e o 'do while' verificam a condição antes de executar o bloco de código."

        ]
    },
    {
        pergunta: "Qual é a finalidade da estrutura de repetição 'for' em programação?",
        resposta:"D. Iterar sobre uma sequência de valores conhecidos.",
        opcao:[
            "A. Executar um bloco de código uma única vez.",
            "B. Verificar uma condição antes de executar um bloco de código.",
            "C. Executar um bloco de código repetidamente até que uma condição seja falsa.",
            "D. Iterar sobre uma sequência de valores conhecidos."

        ]
    },
    {
        pergunta: "Qual é a finalidade da validação de dados em programação?",
        resposta:"C. Verificar se os dados inseridos pelo usuário são válidos e consistentes.",
        opcao:[
            "A. Gerar valores aleatórios para testes.",
            "B. Exibir mensagens de erro na interface do usuário.",
            "C. Verificar se os dados inseridos pelo usuário são válidos e consistentes.",
            "D. Armazenar os dados em um banco de dados."
        ]
    }
]