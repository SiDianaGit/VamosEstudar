function limparSessoes() {
  const resultadoResumo = document.getElementById("resultado-resumo");
  resultadoResumo.innerHTML = "."; // Limpa o conteúdo da seção

  const resultadoQuestoes = document.getElementById("resultado-questoes");
  resultadoQuestoes.innerHTML = "."; // Limpa o conteúdo da seção

  const resultadoGabarito = document.getElementById("resultado-gabarito");
  resultadoGabarito.innerHTML = "."; // Limpa o conteúdo da seção
}


function pesquisaResumo() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultado-resumo");
  let inputMateria = document.getElementById("inputMateria").value;
  let selectDisciplina = document.getElementById("selectDisciplina").value;

  inputMateria = inputMateria.toLowerCase();

  //Se campoPesquisa for uma string sem nada
  if (inputMateria == "") {
      section.innerHTML =`<p>Nada foi encontrado. Você precisa digitar uma matéria.</p>`
      return;
  }

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let resumo = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for(let dado of materias) {
      titulo = dado.titulo.toLowerCase();
      resumo = dado.resumo.toLowerCase();
      disciplina = dado.disciplina.toLowerCase();

      // Se titulo inclui campoPesquisa
      if ((titulo.includes(inputMateria) || resumo.includes(inputMateria)) & disciplina.includes(selectDisciplina)) {
          // Cria um novo elemento HTML para cada resultado
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">
                      ${dado.resumo}
                  </p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
          `;
      }        
  }

  if (!resultados) {
      resultados =`<p>Nada foi encontrado</p>`
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = `<pre>${resultados}</pre>`;
};


function pesquisaQuestionario() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultado-questoes");
  let inputMateria = document.getElementById("inputMateria").value;
  let selectDisciplina = document.getElementById("selectDisciplina").value;

  inputMateria = inputMateria.toLowerCase();

  //Se campoPesquisa for uma string sem nada
  if (inputMateria == "") {
      section.innerHTML =`<p>Nada foi encontrado. Você precisa digitar uma matéria.</p>`
      return;
  }

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let questionario = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for(let dado of materias) {
      titulo = dado.titulo.toLowerCase();
      resumo = dado.resumo.toLowerCase();
      disciplina = dado.disciplina.toLowerCase();

      // Se titulo inclui campoPesquisa
      if (titulo.includes(inputMateria) & disciplina.includes(selectDisciplina)) {
          // Cria um novo elemento HTML para cada resultado
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">
                      ${dado.questionario}
                  </p>
              </div>
          `;
      }        
  }

  if (!resultados) {
      resultados =`<p>Nada foi encontrado</p>`
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = `<pre>${resultados}</pre>`;
};


function pesquisaGabarito() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultado-gabarito");
  let inputMateria = document.getElementById("inputMateria").value;
  let selectDisciplina = document.getElementById("selectDisciplina").value;

  inputMateria = inputMateria.toLowerCase();

  //Se campoPesquisa for uma string sem nada
  if (inputMateria == "") {
      section.innerHTML =`<p>Nada foi encontrado. Você precisa digitar uma matéria.</p>`
      return;
  }

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let gabarito = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for(let dado of materias) {
      titulo = dado.titulo.toLowerCase();
      resumo = dado.resumo.toLowerCase();
      disciplina = dado.disciplina.toLowerCase();

      // Se titulo inclui campoPesquisa
      if (titulo.includes(inputMateria) & disciplina.includes(selectDisciplina)) {
          // Cria um novo elemento HTML para cada resultado
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">
                      ${dado.gabarito}
                  </p>
              </div>
          `;
      }        
  }

  if (!resultados) {
      resultados =`<p>Nada foi encontrado</p>`
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = `<pre>${resultados}</pre>`;
};



