const contas = document.querySelector(".contas");
const valor = document.querySelector(".valor")

export default function LimpaInput() { // Para limpar o input e volta o foco pra ele
    contas.value = ''; //limpar
    valor.value = '';
    contas.focus(); //Voltar o foco pra ele
}

