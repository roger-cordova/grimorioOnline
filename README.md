
## Projeto: Grimório Online

### Descrição
Este projeto é uma aplicação web interativa que permite aos usuários pesquisar e visualizar informações sobre diversas magias de Dungeons & Dragons 5e. A aplicação exibe detalhes como nome, nível, escola, alcance, componentes, duração, descrição, dano, classes, área de efeito e outras informações relevantes.

### Funcionalidades
- **Pesquisa de Magias:** O usuário pode pesquisar magias pelo nome, escola, alcance, duração, descrição, classes, área de efeito e tags.
- **Cores Dinâmicas:** A cor da sombra do texto no título muda aleatoriamente a cada segundo, proporcionando um efeito visual dinâmico.
- **Interface Responsiva:** O layout da aplicação é responsivo e se adapta a diferentes tamanhos de tela.

### Estrutura de Arquivos
- **`index.html`:** Arquivo principal HTML que estrutura a página.
- **`styles.css`:** Arquivo CSS que define o estilo da página, incluindo fontes, cores, e layout responsivo.
- **`app.js`:** Script JavaScript que contém funções para manipular a interface, como a pesquisa de magias e a alteração de cores.
- **`dados.js`:** Contém os dados das magias, estruturados em um array de objetos JavaScript.

### Tecnologias Utilizadas
- **HTML5:** Para estruturar o conteúdo da página.
- **CSS3:** Para estilizar a aplicação, utilizando Flexbox e Media Queries para responsividade.
- **JavaScript:** Para manipulação dinâmica do DOM e funcionalidades interativas.

### Instruções de Uso
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/roger-cordova/grimorioOnline.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd grimorio-online
   ```
3. **Abra o arquivo `index.html` em um navegador:**
   - Basta clicar duas vezes no arquivo `index.html` ou arrastá-lo para uma janela do navegador.

### Detalhes do Código

#### Arquivo: `dados.js`
Contém a lista de magias disponíveis para pesquisa, cada uma estruturada como um objeto JavaScript com propriedades como `nome`, `nivel`, `escola`, `alcance`, `componentes`, `duracao`, `descricao`, `dano`, `classes`, `areaDeEfeito` e `tags`.

#### Arquivo: `app.js`
- **Função `getRandomColor`:** Gera uma cor hexadecimal aleatória para ser usada na sombra do texto.
- **Função `changeTextColor`:** Altera a cor da sombra do texto do título (`h1`) periodicamente.
- **Função `pesquisar`:** Filtra as magias com base no termo de pesquisa inserido pelo usuário e exibe os resultados na interface.

#### Arquivo: `styles.css`
Define o estilo visual da página, incluindo:
- **Corpo da página:** Estilizado com Flexbox para centralizar os elementos na tela.
- **Título (`h1`):** Com sombra de texto dinâmica.
- **Seções e resultados:** Estilizados para apresentar as informações de forma clara e visualmente atraente.

### Melhorias Futuras
- **Adição de mais magias:** Expandir o `dados.js` com mais magias.
- **Filtro avançado:** Implementar filtros avançados para facilitar a busca de magias específicas.
- **Animações adicionais:** Incluir animações para melhorar a interatividade.

### Contribuição
Sinta-se à vontade para contribuir com melhorias. Faça um fork do projeto, crie uma branch e envie um pull request.

### Licença
Este projeto está licenciado sob a Licença MIT.
