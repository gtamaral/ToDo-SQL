<h1 align="center">📝 ToDo 📝</h1>



## 📄 Explicação

O projeto é um aplicativo simples de gerenciamento de tarefas (to-do list) construído em Node.js com uma arquitetura MVC (Model-View-Controller). Ele permite que os usuários criem, editem, removam e visualizem tarefas. As tarefas têm um título, uma descrição e um status de conclusão.

## O que o Projeto faz?

Funcionalidades Principais:

- Adicionar novas tarefas.
- Editar informações de tarefas existentes.
- Marcar tarefas como concluídas ou não concluídas.
- Remover tarefas.
- Visualizar uma lista de todas as tarefas.

## 📁 Páginas

O site tem no total 3 páginas, sendo elas:

- **/tasks/add:** Página de criação de tarefas. Permite aos usuários adicionar novas tarefas especificando título, descrição e status de conclusão.
- **/tasks/edit/:id:** Página de edição de tarefas. Permite aos usuários editar as informações de uma tarefa existente, incluindo título e descrição. O parâmetro :id na URL identifica a tarefa que está sendo editada.
- **/tasks::** Lista de todas as tarefas. Esta página exibe todas as tarefas cadastradas, incluindo seus detalhes, como título, descrição e status de conclusão.


## 🚀 Tecnologias

Tecnologias Utilizadas: 

- Node.js: Plataforma de tempo de execução JavaScript que permite a construção de aplicativos do lado do servidor usando JavaScript.
- Express.js: Framework web para Node.js utilizado para criar rotas, lidar com solicitações e respostas HTTP.
- Sequelize: ORM (Object-Relational Mapping) que simplifica a interação com bancos de dados relacionais.
- Handlebars: Mecanismo de template para gerar visualizações dinâmicas baseadas em HTML.
- MySQL: Banco de dados relacional usado para armazenar informações sobre as tarefas.


  
## 📔 Conhecimentos Utilizados

✅ Arquitetura MVC: O projeto segue a arquitetura Modelo-Visualização-Controlador, uma abordagem de design que separa as preocupações do aplicativo em três componentes principais. Os modelos lidam com a lógica de negócios e a interação com o banco de dados. As visualizações (Handlebars) geram a saída HTML. Os controladores manipulam as solicitações do usuário e coordenam a interação entre modelos e visualizações.

✅ ORM (Object-Relational Mapping): O projeto utiliza o Sequelize como um ORM para interagir com o banco de dados MySQL. Isso permite que os modelos sejam definidos em JavaScript, facilitando a criação, leitura, atualização e exclusão de registros.

✅ Roteamento: O Express.js é usado para definir rotas que correspondem a ações específicas nos controladores. Isso facilita a organização e o mapeamento das URLs para as funcionalidades do aplicativo.

✅ Templates Handlebars: O mecanismo de template Handlebars é usado para gerar as visualizações HTML do aplicativo. Ele permite a criação de templates reutilizáveis e dinâmicos que são renderizados com dados do servidor.

## 📕 Como usar?

Antes de iniciar, você precisa ter [Git](https://git-scm.com)

```bash
# Clone this project
$ git clone (https://github.com/gtamaral/ToDo-SQL.git)
# Access
$ cd ToDo-SQL
# Install dependencies
$ yarn or npm install
# Run the project
$ yarn start or npm start
# The server will initialize in the <http://localhost:3000>
```

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL.
2. Configure o arquivo `.env` com as informações do banco de dados:

```bash
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=nodemvc2
DB_HOST=localhost
DB_DIALECT=mysql
```

## 🤝 Colaborador

Projeto desenvolvido por:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/gtamaral.png" width="160px;" alt="Foto do Rodrigo amaral Juca no github"/><br>
        <sub>
          <b>Rodrigo Amaral Jucá</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


<div align="center">
  <a href="#top">Volte para o topo</a>
</div>
