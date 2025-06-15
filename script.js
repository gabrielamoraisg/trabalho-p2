console.log("Portfólio carregado com sucesso!");

const botoesProjeto = document.querySelectorAll('.btn-projeto');

botoesProjeto.forEach(botao => {
    botao.addEventListener('click', (event) => {
        if (botao.getAttribute('href') === '#') {
            event.preventDefault(); 
        }
    });
});