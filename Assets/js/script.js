const contas = document.querySelector(".contas");
const valor = document.querySelector(".valor")
const addTarefa = document.querySelector(".addtarefa")
const registroDeContas = document.querySelector(".registrodecontas")
const total = document.querySelector(".total");

function criaP(){
    const paragrafo = document.createElement('p')
    return paragrafo;
}

addTarefa.addEventListener('click', function(e){
    if(!contas.value + isNaN(valor.value)){
     alert(" Insira número valido \n Ou não utilize `,`");
     return}
    regTarefas(contas.value +  " R$ " + valor.value);
       
   
});

function LimpaInput(){ // Para limpar o input e volta o foco pra ele
    contas.value = ''; //limpar
    valor.value = '';
    contas.focus(); //Voltar o foco pra ele
}

function criaBotaoApagar(paragrafo1){ // Recebe o li
    paragrafo1.innerText += ' ' // Para da um espaço
const botaoApagar = document.createElement('button');
botaoApagar.innerText= 'Apagar' ; //Criando o botão
botaoApagar.setAttribute('class', 'apagar') // Definir a classe e depois o nome da classe
botaoApagar.setAttribute('title', 'apagar esta tarefa')
paragrafo1.appendChild(botaoApagar);}

function regTarefas(contasInput,valorInput){
    const paragrafo = criaP()
    const paragrafo1 = criaP()
    paragrafo.innerText = contasInput;
    paragrafo1.innerHTML = valorInput;
    registroDeContas.appendChild(paragrafo,paragrafo1);
    LimpaInput()
    criaBotaoApagar(paragrafo)
    atualizarContas()
}

document.addEventListener('click', function(e){
    const apagar = e.target;

    if (apagar.classList.contains('apagar')){
        apagar.parentElement.remove();
        atualizarContas();
    }
})

function atualizarContas(){
    const paragrafosComContas = registroDeContas.querySelectorAll('p');
    const listaDeContas= []

    for (let registroDeContas  of paragrafosComContas){
        let  contas = registroDeContas.innerText;
        contas = contas.replace('Apagar', '').trim()
        listaDeContas.push(registroDeContas)
    }
}

