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


function regTarefas(contasInput,valorInput){
    const paragrafo = criaP()
    const paragrafo1 = criaP()
    paragrafo.innerText = contasInput;
    paragrafo1.innerHTML = valorInput;
    registroDeContas.appendChild(paragrafo,paragrafo1);
    LimpaInput()
}




