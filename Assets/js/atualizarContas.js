 const total = document.querySelector(".total");
 export let dinheiroTotal = []


export default function atualizarContas (){
  
    let soma =0;
   
    for (let valor of dinheiroTotal ){
       soma += valor ;
       
    }                   
    total.textContent = "Total: R$" + soma.toFixed(2)
    
   }
   


document.addEventListener('click',function(e){
    const apagar = e.target
    if(apagar.classList.contains('apagar')){
        const paragrafoConta = apagar.parentElement;
        const valorConta = parseFloat(paragrafoConta.textContent.split('R$')[1].trim())
        const index = dinheiroTotal.indexOf(valorConta);
        if (index !== -1){
            dinheiroTotal.splice(index,1);
            paragrafoConta.remove()
            atualizarContas()
        }
    }
})