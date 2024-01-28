const contas = document.querySelector(".contas");
const valor = document.querySelector(".valor")
const addTarefa = document.querySelector(".addtarefa")
const registroDeContas = document.querySelector(".registrodecontas")
const total = document.querySelector(".total");
let dinheiroTotal = []

function criaP(){
    const paragrafo = document.createElement('p')
    return paragrafo;
}

addTarefa.addEventListener('click', function(e){
    if(!contas.value + isNaN(parseFloat(valor.value))){
     alert(" Insira número valido \n Ou não utilize `,`");
     return}
    regTarefas(contas.value, parseFloat(valor.value));
       
   
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
    paragrafo.innerText = contasInput + " R$ " + valorInput; 
    registroDeContas.appendChild(paragrafo);
    LimpaInput()
    criaBotaoApagar(paragrafo)
    dinheiroTotal.push(valorInput)
    atualizarContas()

    
}
function atualizarContas(){
    let soma =0;
   
    for (let valor of dinheiroTotal ){
       soma += valor ;
       
    }
    total.textContent = "Total: R$" + soma.toFixed(2)
    console.log(dinheiroTotal)
   }
   
document.addEventListener('click', function(e){
    const apagar = e.target;

    if (apagar.classList.contains('apagar')){
        const paragrafoConta = apagar.parentElement;
        const valorConta = parseFloat(paragrafoConta.textContent.split('R$')[1].trim()); // Extrai o valor da conta removida
        dinheiroTotal = dinheiroTotal.filter(valor => valor !== valorConta); // Remove o valor da conta do array
        paragrafoConta.remove();
        atualizarContas(); // Atualiza o total
    }
});



