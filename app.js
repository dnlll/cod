function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let sectionResultados = document.getElementById("resultados-pesquisa");
   
    // Obtém a seção de notícias
    let sectionNoticias = document.getElementById("secao-noticias");
    
    // Obtém o valor do campo de pesquisa e o converte para minúsculas
    let inputNome = document.getElementById("input-nome");
    let valorPesquisa = inputNome.value.trim().toLowerCase();
    
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    
    // Limpa a seção de resultados
    sectionResultados.innerHTML = "";
    
    // Se o campo de pesquisa não estiver vazio, mostra os resultados e oculta as notícias
    if (valorPesquisa) {
        let encontrouResultado = false;
        for (let info of dados) {
            // Converte o nome e a descrição para minúsculas
            let nome = info.nome.toLowerCase();
            let sobre = info.sobre.toLowerCase();
            
            // Se o nome ou a descrição contiver o texto da pesquisa, cria um resultado
            if (nome.includes(valorPesquisa) || sobre.includes(valorPesquisa)) {
                resultados += `
                    <div class="item-resultado">
                        <h2><a href="#" target="_blank">${info.nome}</a></h2>
                        <p class="descricao-meta">${info.sobre}</p>
                        <a href="${info.redesSociais.twitch}" target="_blank">
                            <img src="images/twitch.png" alt="Twitch Logo" class="twitch-logo">
                        </a>
                        <a href="${info.redesSociais.youtube}" target="_blank">
                            <img src="images/youtube.png" alt="YouTube Logo" class="youtube-logo">
                        </a>
                    </div>
                `;
                encontrouResultado = true;
            }            
        }
        
        // Atualiza o conteúdo da seção de resultados com o HTML gerado
        if (encontrouResultado) {
            sectionResultados.innerHTML = resultados;
        } else {
            sectionResultados.innerHTML = "<p>Jogador não Encontrado!</p>";
        }
        // Oculta a seção de notícias
        sectionNoticias.style.display = "none";
        // Exibe a seção de resultados
        sectionResultados.style.display = "flex";
    } else {
        // Se o campo de pesquisa estiver vazio, mostra a seção de notícias e oculta os resultados
        sectionNoticias.style.display = "grid";
        sectionResultados.style.display = "none";
    }
}

function verificarInput(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o envio do formulário, se aplicável
        pesquisar();
    }
}

function verificarPesquisa() {
    let inputNome = document.getElementById("input-nome");
    if (!inputNome.value.trim()) {
        inputNome.placeholder = "Digite Algum Nome ou Descrição";
    } else {
        pesquisar();
    }
}

// Adiciona os eventos para o botão de pesquisa e o campo de entrada
document.getElementById("botao-pesquisar").addEventListener("click", verificarPesquisa);
document.getElementById("input-nome").addEventListener("keypress", verificarInput);
