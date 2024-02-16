let usuarioNome; // Adicionado para armazenar o nome do usuário
let acertos = 0; // Adicionado para contar a quantidade de respostas corretas
let aux = 0;


//Parte Gabriel

function opcaoSelecionada(clicado) {
    const opcaoClicada = clicado.target;
    const textoOpcaoClicada = opcaoClicada.textContent;
    const respostaCorreta = questoes[aux].resposta;

    if (textoOpcaoClicada === respostaCorreta) {
        document.body.classList.add("correto");
        acertos++;
    } else {
        document.body.classList.add("incorreto");
    }

}

    // ... (código não alterado)

    // Verificar se há mais perguntas ou se o quiz chegou ao fim

    //Parte Gabriel
