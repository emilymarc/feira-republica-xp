# *Projeto Feira da República*

<p>
  <img src="frontend/republica-hippie/src/assets/logo.png" alt="Logo República Hippie">
</p>

## Projeto de Conclusão do Curso Gama Experience Turma 41 - XP41

<br>

### 1 - Objetivo do Trabalho  :bulb:

   Na primeira reunião do trabalho, os integrantes do grupo decidiram pelo projeto Feira da República. 
   
   A praça da República é um cartão postal da cidade de São Paulo - SP, Brasil, e no centro da praça se encontra uma feira de artesanatos conhecida como Feira de República. 
   
   Apesar da popularidade da feira e da existência de uma associação dos artesãos que nela expõe seus produtos, não existe uma plataforma de e-commerce destinada à venda on-line dos artesanatos ali comercializados. 
   
   Assim, com o intuito de possibilitar vendas on-line, o cliente (Associação de Artesãos) solicitou a criação de um e-commerce no qual sejam expostos os produtos vendidos na feira e indicados os respectivos artesãos/expositores. 
   
   Uma vez que a maioria dos expositores não possui muita habilidade com uso de aplicativos, a Associação de Artesãos entendeu desnecessário, a princípio, o cadastramento dos artesãos/expositores como usuários do sistema, deixando somente a Associação como administradora da plataforma. 
   
   Na ideia de negócio projetada pela nossa cliente (Associação de Artesãos), ela cadastra de forma centralizada os produtos e organiza as entregas. 
   
   O cliente, por sua vez, se cadastra na plataforma e, logado, pode comprar produtos.
 
  <br>
   
### 2 - Organização e metodologia  :office:
  
  O projeto foi elaborado utilizando a metodologia ágil kanban. Para tanto, além do respeito aos cerimoniais exigidos pelo método e ensinados durante o curso, a squad optou pelo uso do aplicativo [Trello](https://trello.com/b/9W8Uz2is/xpha41-grupo-7-feira-republica) como ferramenta de registro e organização visual. 
  
  Cada time (designer UX, front-end, back-end) detinha uma etiqueta de diferente coloração, de modo a facilitar a identificação de seus cards. Os cards foram separados em colunas "to do", "doing", "testing" e "done", facilitando um acompanhamento real de cada etapa do projeto. 
  
  Além disso, a squad se comunicava via aplicativo "slack", agendando reuniões por time e reuniões de toda a squad. 
  
  Houve a criação de backlog, com tarefas a serem realizadas para a entrega do trabalho e ideias de features a serem feitas no futuro.
  
  Nas reuniões foram criados cards com descrição das tarefas a serem desenvolvidas, indicação da squad responsável, dos membros encarregados da tarefa indicada no card e data de entrega.  
 
  <br>

### 3 - O código  :computer:
  
  O Projeto foi desenvolvido com as seguintes tecnologias:
  
  * JavaScript 
  * CSS 
  * React 
  * Styled Components 
  * Yup
  * Formik
  * Redux 
  * Node JS 
  * Sequelize
  * Jest

  O time de Front-ends utilizou JavaScript, CSS, React, Styled Components e Redux. A linguagem de marcação de texto escolhida foi HTML. 
  
  O time de Back-ends utilizou Node.js, o framework Express, o ORM Sequelize.
  
  Para criptografia de senhas, o bcriptjs e para token, o padrão de autenticação JWT.
  
  O banco de dados utilizado foi o MySql e para sua criação e população, Migrations, conforme padrão da documentação. 
  
  Os testes foram efetuados com Jest. 
 
  Foram criados diferentes ambientes para desenvolvimento, teste e produção. 
  
  Todo o código foi baseado na arquitetura Model-View-Controller (MVC) e modelagem Domain Driven Design (DDD). 
  
  O [Deploy](https://feira-republica.herokuapp.com/) back-end foi efetuado por meio do aplicativo Heroku.
  
   <br>

### 4 - Como utilizar  :surfer: 

  A documentação da API pode ser conferida neste [link](https://documenter.getpostman.com/view/8182997/UzJPMafP)
  
  Segue prévia da aplicação:
   
  <br>
  
  <div>
<img src="https://github.com/emilymarc/feira-republica-xp/blob/main/Republica%20Hippie.gif" alt="preview"/>
</div>
 
 <br>
 
  Para acessar a página da web fruto deste projeto, [clique aqui](https://feira-republica.netlify.app/)

 <br>
   
  *Para **clonar o projeto** :*
  
  ```$ git clone https://github.com/emilymarc/feira-republica-xp.git```
  
  <br>
  
  *Para **INICIAR O BACK-END**, acessar a pasta backend, abrir o terminal e executar:*
  
  ```$ npm install```
  
  Após, criar a pasta ```.env``` conforme exemplo constante no arquivo ```.env-example```

  
  Ainda na pasta backend, para **iniciar o sequelize-cli** digitar na linha de comando do terminal:
  
  ```npx sequelize-cli init```

  A execução do projeto também depende da **criação de um banco de dados** e para isso se faz necessário, na linha de comando do terminal:
  
  ```npx sequelize-cli db:create```
  
  Também é possível criar o banco de dados diretamente no MySql por meio do comando: ```CREATE database```
 
  
  Na sequência, iniciar as migrations por meio do seguinte comando: 
  
  ```npx sequelize-cli db:migrate```
  
  Por fim, para ativar o seed e assim popular o banco de dados, execute o comando abaixo :
  
  ```npx sequelize-cli db:seed:all```

  <br>
  
  
  *Para **INICIAR O FRONT-END**, após abrir a pasta frontend, ingressar no diretório republica-hippie e, após, na pasta src, executar na linha de comando:*
  
  ```$ npm start```
  
  
 <br>
 
  :warning: Mas atenção: Não esqueça do comando ```npm run dev``` para manter o servidor ativo. 
  
 <br> 

  Agora já sabe como navegar por essa maravilha  :ship: 
  
  <br>
  
### 5 - Integrantes da equipe  :crown:
   
  O projeto foi desenvolvido por 
    
  Front-ends: 
  * [Manuela Silva](https://github.com/netuninho)
  * [Victor Hugo de Souza Feracin](https://github.com/victorFeracin)
  * [Israel Silva](https://github.com/israel53)


  Back-ends: 
  * [Emily Marcolino](https://github.com/emilymarc)
  * [Caroline Silva Lima - Karu](https://github.com/karumundo)
  * [Geovane Silva](https://github.com/Projetosgeovane)
  * [Gefferson Oliveira](https://github.com/GeFFz)
  * [Welton Rodrigues](https://github.com/WeltonDev)
                 
                  
:purple_heart: Projeto realizado no decorrer de três semanas de empenho do grupo 7 - Desafio Chefão  :alien: 
