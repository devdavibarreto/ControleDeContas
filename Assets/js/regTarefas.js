
const registroDeContas = document.querySelector(".registrodecontas")
import criaP from "../js/criap.js";
import LimpaInput from "./limpaInput.js";
import criaBotaoApagar from "./criaBotaoApagar.js";
import atualizarContas from "./atualizarContas.js";
import { dinheiroTotal } from "./atualizarContas.js";



export const regTarefas = (contasInput, valorInput) => {
    const paragrafo = criaP()

    paragrafo.innerText = contasInput + " R$ " + valorInput;
    registroDeContas.appendChild(paragrafo);
    LimpaInput()
    criaBotaoApagar(paragrafo)
    dinheiroTotal.push(valorInput)
    atualizarContas()


}

