/*  
1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
2. Pegar o elemento de **id do conselho** 
3. Pegar o elemento de **descrição do conselho**
4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.
5. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innerHTML**.
6. Por fim, basta chamar a função criada.
7. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.
*/
const adviceId = document.querySelector("#advice");
console.log(adviceId);
const adviceText = document.querySelector(".advice");
console.log(adviceText);

document.querySelector(".btn").addEventListener("click", () => {
    advices();
    showRandonAdvice();
})

async function advices(){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url);
    console.log(response);
    return await response.json();
}

async function showRandonAdvice(){
    const advice = await advices();
    console.log(advice.slip.advice);
    adviceId.innerHTML =`ADVICE # ${advice.slip.id}`;
    console.log(adviceText);
    adviceText.innerText = advice.slip.advice;
}