function pesquisar() {

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let lancamento = "";
    let genero = "";



    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado"
        return;
    }

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        genero = dado.genero.toLowerCase();


        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || dado.lancamento.includes(campoPesquisa)) {
            resultado +=

                `
            <div class="item-resultado">
                <img src="${dado.imagem}" class="imagem-ao-lado">
                <div class="texto">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">${dado.lancamento}</p>
                    <p class="descricao-meta">${dado.genero}</p>
                    <a href=${dado.informacoes} target="_blank">Mais informações.</a>
                 </div>
            </div>

        `
        };
    };

    if (!resultado) {
        resultado = "Desculpa não possui essa palavra em meus dados ou esse jogo."
    }
    section.innerHTML = resultado

};
//imagem titulo descricao informacoes

