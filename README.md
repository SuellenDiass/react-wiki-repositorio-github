
<p> <h1 align="center">Projeto React-wiki-repositorio-github</h1></p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/react-calculadora/assets/102911341/8a3f0b5a-3830-45da-9040-ec7137fe8bf7">
</p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/react-calculadora/assets/102911341/987e6b67-c189-4205-b32e-2808c0ccc217">
</p>


<p align="center">Seja redirecionado à página do 
<a href="https://profound-zabaione-6f7c14.netlify.app/" target="_blank">projeto</a></p>


<p> <h2 align="center">Etapas do projeto</h2></p>

## Descrição do projeto 

<p align="justify">

## Resumo do desafio proposto

No Desafio de Projeto, aprendi como criar uma Wiki para salvar repositórios do GitHub. Durante o projeto, aprendi a consumir a API do GitHub para obter informações sobre os repositórios desejados. Utilizei os conceitos aprendidos de JavaScript e React para listar e exibir os repositórios de forma organizada. Através do React, pude criar componentes reutilizáveis e gerenciar o estado da aplicação. Com isso, pude criar uma interface interativa onde os usuários podem buscar e adicionar repositórios à lista. Foi uma ótima oportunidade de aplicar meus conhecimentos em JavaScript e React na prática.

Essas etapas fornecem uma visão geral de como o projeto da Wiki repositório github foi desenvolvido.Certifique-se de importar corretamente os componentes e estilos necessários para que o projeto funcione corretamente.


No arquivo `app.js`:

- [x] Importamos as dependências necessárias, incluindo o React e os componentes personalizados.

- [x] Definimos os estados iniciais utilizando o `useState`. Criamos o estado `currentRepo` para armazenar o nome do repositório atual que está sendo buscado, e o estado `repos` para armazenar a lista de repositórios encontrados.
- [x] Implementamos a função `handleSearchRepo` que é chamada quando o botão de busca é clicado. Dentro dessa função, usamos a função `api.get` para fazer uma requisição à API do GitHub e obter os dados do repositório informado. Em seguida, verificamos se o repositório foi encontrado através da propriedade `id` do objeto de resposta. Caso tenha sido encontrado, verificamos se o repositório já existe na lista `repos` utilizando o método `find`. Se o repositório não existir, adicionamos ele à lista utilizando o `setRepos` e resetamos o valor do `currentRepo` para vazio.
- [x] Implementamos a função `handleRemoveRepo` que é responsável por remover um repositório da lista. Essa função recebe o ID do repositório a ser removido como parâmetro. Dentro da função, utilizamos o método `filter` para criar um novo array que exclui o repositório com o ID correspondente. Em seguida, atualizamos o estado `repos` com o novo array filtrado.
- [x] Renderizamos o componente `Container` que contém a imagem do logo, o componente `Input` para a entrada do nome do repositório, o componente `Button` para a busca, e o componente `ItemRepo` para renderizar a lista de repositórios.

No arquivo `index.js`:

- [x] Importamos o React e o componente `ItemContainer` do arquivo de estilos.

- [x] Definimos o componente funcional `ItemRepo` que recebe as propriedades `repo` (contendo as informações do repositório) e `handleRemoveRepo` (função para remover o repositório). Dentro do componente, renderizamos as informações do repositório, como o nome, o nome completo, um link para o repositório e um link para remover o repositório.
- [x] Quando o link "Remover" é clicado, chamamos a função `handleRemoveRepo` passando o ID do repositório como parâmetro.

- [x] Os arquivos `styles.js ` é o componente onde encontra-se as estilizações do componente.

Resumidamente, o arquivo `app.js` é o componente principal que gerencia o estado do aplicativo e contém as funções de busca e remoção de repositórios. Já o arquivo `index.js` é responsável por renderizar cada item de repositório e tratar a remoção dos mesmos.


Observações:

Comandos utilizados:

1 Verificar se o nodejs está instalado comando: node -v e npm -v

2 Instalar o create React App comando: npm install -g create-react-app

3 Criar projeto com react app comando: npx create-react-app wiki-repositorio-github

4 Iniciar servidor de desenvolvimento do projeto comando: cd wiki-repositorio-github  npm start

5 Instalar as dependências comando : npm install

6 Instalar pacotes para consumir Api do github: comando npm add axios

7 Styled Components: Uma biblioteca que permite escrever CSS no JavaScript, facilitando a estilização de componentes React. Ela oferece uma abordagem mais modular e encapsulada para estilização, comando: 
npm install styled-components

8 Iniciar o projeto: npm start


#### No arquivo passo-a-passo-rodar-react.md tem orientações como abrir um projeto pronto em react pela primeira vez no seu pc.

## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://camo.githubusercontent.com/ee5225ba7c4338f1a1c10121ec32c396e1a4a2f5b0b58b6afd6d5c56ff5d6196/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2d776f72646d61726b2e737667" alt="firebase" width="40" height="40"/> </a>

###

#### Curso React da Dio.me administrado pelo mentor Pablo Henrique/ Desenvolvedor Full Stack

[DIO](https://www.dio.me/).
