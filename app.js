// Função para gerar uma cor hexadecimal aleatória
function getRandomColor() {  
    const letters = '0123456789ABCDEF'; // Cria uma string com todos os caracteres hexadecimais possíveis
    let color = '#'; // Inicializa uma string vazia para armazenar a cor gerada
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()   
   * 16)]; // Itera 6 vezes para gerar uma string hexadecimal de 6 caracteres
    }
    return color; // Retorna a cor gerada
  }

// Função para alterar a cor da sombra do texto do elemento h1
  function changeTextColor() {
    const h1 = document.querySelector('h1'); // Seleciona o elemento h1 no DOM
    const randomColor = getRandomColor(); // Função para gerar cores aleatórias
    h1.style.textShadow = `2px 2px 4px ${randomColor}`; // Aplica a cor aleatória como sombra do texto do h1
  }
  
  setInterval(changeTextColor, 1000); // Muda a cor a cada 500ms

  function pesquisar() {
  //declaração de variaveis
  let resultado        = ""; 
  let section          = document.getElementById("resultados-pesquisa");
  let campoPesquisa    = document.getElementById("campo-pesquisa").value;
  let nomeMagia        = "";  
  let escolaMagia      = "";
  let alcanceMagia     = "";  
  let duracaoMagia     = "";
  let descricaoMagia   = "";  
  let classesMagia     = "";
  let areaMagia        = "";
  let tagsMagia        = "";

  campoPesquisa = campoPesquisa.toLowerCase();
  console.log(campoPesquisa);

  if (campoPesquisa == "") {    
    section.innerHTML = `<div class="item-resultado">
                       <p class="descricao-meta">Busca não pode ser vazio</p>
                       </div>`
    return;
  }
  console.log(campoPesquisa);
 for (let dado of magias) {  
  nomeMagia        = dado.nome.toLowerCase()  
  escolaMagia      = dado.escola.toLowerCase()
  alcanceMagia     = dado.alcance.toLowerCase()  
  duracaoMagia     = dado.duracao.toLowerCase()
  descricaoMagia   = dado.descricao.toLowerCase()  
  classesMagia     = dado.classes.toLowerCase()
  areaMagia        = dado.areaDeEfeito.toLowerCase()
  tagsMagia        = dado.tags.toLowerCase() 

  if (nomeMagia.includes(campoPesquisa) ||      
      escolaMagia.includes(campoPesquisa) ||
      alcanceMagia.includes(campoPesquisa) ||      
      duracaoMagia.includes(campoPesquisa) ||
      descricaoMagia.includes(campoPesquisa) ||      
      classesMagia.includes(campoPesquisa) ||
      areaMagia.includes(campoPesquisa) ||
      tagsMagia.includes(campoPesquisa)) {    
    resultado += `
    <div class="item-resultado">
      <h2>${dado.nome}</h2>
      <p class="descricao-meta">Nivel: ${dado.nivel}</p>
      <p class="descricao-meta">Escols: ${dado.escola}</p>
      <p class="descricao-meta">Alcance: ${dado.alcance}</p>
      <p class="descricao-meta">Componentes:${dado.componentes}</p>
      <p class="descricao-meta">Duração: ${dado.duracao}</p>
      <p class="descricao-meta">Descrição: ${dado.descricao}</p>
      <p class="descricao-meta">Dano: ${dado.dano}</p>
      <p class="descricao-meta">Classes: ${dado.classes}</p>
      <p class="descricao-meta">Area de Efeito: ${dado.areaDeEfeito}</p>
      <a href=${dado.link} target="_blank">Mais Informações</a>             
    </div>`;

    
  }
  
  
 }
 if (!resultado){
  section.innerHTML = `<div class="item-resultado">
                       <p class="descricao-meta">Nada encontrado com ${campoPesquisa}</p>
                       </div>`
  return;
 }
 section.innerHTML = resultado;
}