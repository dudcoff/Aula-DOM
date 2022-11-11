/* EXEMPLOS
function xyz() {
    console.log("carregou");
}

const abc = () => {
    console.log("carregou via arrow fuction");
};

document.addEventListener('DOMContentLoaded',  () => {
    console.log("funcionou");
});

const paragrafoDesejado = document.getElementById('modificado');

console.log(paragrafoDesejado.innerText);
paragrafoDesejado.innerText = 'Etec Adolpho Berezin';
console.log(paragrafoDesejado.innerText);

*/

/* COR

const trocaCores = () => {
    document.body.classList.toggle('cores-alternativas');
};

const iniciar = () => {

        //Botão de troca de cores
        const botaoCores = document.getElementById('alternar-cores');

       setTimeout(() =>{
        //Setup
        const dataAtual = document.getElementById('data-atual');

        dataAtual.innerText = (new Date()).toLocaleDateString('pt-BR');

        dataAtual.classList.add('destacado');
       }, 5000);

    

       setInterval(trocaCores, 2000);

       botaoCores.addEventListener('click', trocaCores);

        
        /*setTimeout(trocaCores, 2000);
    };

document.addEventListener('DOMContentLoaded', iniciar)*/

// teve imagem, mas não consegui acompanhar














