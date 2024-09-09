function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Verifica se a seção foi encontrada no DOM (para depuração)

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado!</p>"
    return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre cada dado no array de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
      // se titulo inclui CampoPesquisa, faça a seguir...
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item de resultado
      resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
      }
  }

  if (!resultados) {
    resultados = "<p>Nada foi Encontrado!</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
