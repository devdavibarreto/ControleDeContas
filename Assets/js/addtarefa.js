export const addTarefa = document.querySelector(".addtarefa")
const contas = document.querySelector(".contas");
const valor = document.querySelector(".valor")
import {regTarefas}from "./regTarefas.js"
import LimpaInput from "./limpaInput.js";


addTarefa.addEventListener('click', function(e){
    if(!contas.value ){
     alert(" Insira o nome da conta");
     return}
     if (!Number(parseFloat(valor.value))){
        alert(" Insira um valor valido")
        return
     } 
    regTarefas(contas.value, parseFloat(valor.value));
       
   
});

document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if(!contas.value ){
            alert(" Insira o nome da conta");
            return}
            if (!Number(parseFloat(valor.value))){
               alert(" Insira um valor valido")
               return
            } 
           regTarefas(contas.value, parseFloat(valor.value));
              
        }       
       
    });

