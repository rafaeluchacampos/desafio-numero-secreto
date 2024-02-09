let numeroLimite = 100
let numeroSecreto = gerarNumero();
let tentativas = 10
let chute

mensagemInicial()

function mensagemInicial(){
    novoHTML("h1", "Jogo do Número Secreto");
    novoHTML("p", `Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute(){
    chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        novoHTML("h1", "Parabéns!!");
        let palavraTentativa = tentativas == 1? "tentativa" : "tentativas";
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`
        novoHTML("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else {
        if (chute > numeroSecreto){
            novoHTML("p", "O número secreto é menor");
        }else{
            novoHTML("p", "O número secreto é maior");
        }
    } 
    tentativas++;
    limparCampo();
}

function novoHTML(tag, texto){
    let name = document.querySelector(tag);
    name.innerHTML = texto;
}

function gerarNumero(){
    return parseInt(Math.random() * numeroLimite + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    mensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumero();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}