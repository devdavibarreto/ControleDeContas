
export default function criaBotaoApagar  (paragrafo1){ // Recebe o li
    paragrafo1.innerText += ' ' // Para da um espaço
const botaoApagar = document.createElement('button');
botaoApagar.innerText= 'Apagar' ; //Criando o botão
botaoApagar.setAttribute('class', 'apagar') // Definir a classe e depois o nome da classe
botaoApagar.setAttribute('title', 'apagar esta tarefa')
paragrafo1.appendChild(botaoApagar);}



