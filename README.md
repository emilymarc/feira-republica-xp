<p align="center">
  <img src="frontend/republica-hippie/src/assets/logo.png" alt="Logo República Hippie">
</p>

# *Feira da República*

Projeto de Conclusão do Curso Gama Experience Turma 41 - XP41

##### Prévia

<br>

<div align="center">
<img src="https://github.com/emilymarc/feira-republica-xp/blob/main/Republica%20Hippie.gif" alt="preview"/>
</div>

<br>

[E-commerce Feira Republica](https://feira-republica.netlify.app/) | [API documentation](https://documenter.getpostman.com/view/8182997/UzJPMafP)

Para mais detalhes do projeto, visite nossa pagina no [Notion](https://www.notion.so/Feira-Republica-dd0bf04a8e194a1989fa39cb7c32c319)

## Objetivo  :bulb:

A praça da República é um cartão postal da cidade de São Paulo - SP, Brasil, e no centro da praça se encontra uma feira de artesanatos conhecida como Feira de República.

Apesar da popularidade da feira e da existência de uma associação dos artesãos que nela expõe seus produtos, não existe uma plataforma de e-commerce destinada à venda on-line dos artesanatos ali comercializados.

Assim, com o intuito de possibilitar vendas on-line, o cliente (Associação de Artesãos) solicitou a criação de um e-commerce no qual sejam expostos os produtos vendidos na feira e indicados os respectivos artesãos/expositores.

Uma vez que a maioria dos expositores não possui muita habilidade com uso de aplicativos, a Associação de Artesãos entendeu desnecessário, a princípio, o cadastramento dos artesãos/expositores como usuários do sistema, deixando somente a Associação como administradora da plataforma.

Na ideia de negócio projetada pela nossa cliente (Associação de Artesãos), ela cadastra de forma centralizada os produtos e organiza as entregas.

O cliente, por sua vez, se cadastra na plataforma e, logado, pode comprar produtos.

<br>

## 🏄 Como utilizar

### 1️⃣ Pré-requisitos

* Git ([https://git-scm.com/](https://git-scm.com/))
* Node JS ([https://nodejs.org](https://nodejs.org/))
* Conta no Heroku
* Conta no Netlify
* Conta no Cloudinary
* Instalar as dependencias corretamente
* VS Code ou outra IDE compativel

A documentação da API pode ser conferida neste [link](https://documenter.getpostman.com/view/8182997/UzJPMafP)

### :thinking: *Para **utilizar o projeto** :*

Faça um fork deste repositório pela interface do GitHub.

```

# clone o repositório e entre na pasta do backend para acessar o servidor
git clone https://github.com/emilymarc/feira-republica-xp.git

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

### :zap: Executando

Criar um arquivo `.env` conforme arquivo de exemplo`.env-example`

As credenciais devem do banco de dados devem estar preenchidas de acordo com o banco criado no seu mysql local. Assim como as credenciais do Cloudinary

Para **INICIAR O BACK-END**, acessar a pasta backend, abrir o terminal e executar as dependencias:

```
# instalando dependencias
cd backend
npm install

# iniciando o sequelize-cli
npx sequelize-cli init
```

A execução do projeto também depende da **criação de um banco de dados** como abaixo e para isso se faz necessário, na linha de comando do terminal digitar:

Modelo DER do banco de dados em mysql

![](assets/20220711_110926_image.png)

```
# dentro da pasta backend
npx sequelize-cli db:create

# Por fim, para ativar o seed e assim popular o banco de dados, execute o comando abaixo :
npx sequelize-cli db:seed:all
```

*Para **INICIAR O FRONT-END**, após abrir a pasta frontend, ingressar no diretório republica-hippie e, após, na pasta src, executar na linha de comando:*

```

# Para iniciar o Frontend
cd frontend
npm start

# para ligar o servidor
cd backend
npm run dev 
```


:warning: Mas atenção: Não esqueça do comando ```npm run dev``` para manter o servidor ativo.


Agora já sabe como navegar por essa maravilha  :ship:

### ☁️ Deploy na nuvem (opcional)

Crie uma conta no Heroku e no Netlify

Recomendamos criar uma branch em seu repositório contendo apenas a pasta backend e outra apenas a pasta frontend para que nos proximos passos apenas uma branch do repositorio possa ser associada ao deploy em cada ambiente na nuvem.

#### Netlify

Crie um projeto no modo free com o nome desejado.

Importe seu projeto do github onde está o fork deste projeto e associe a branch que contem a pasta frontend.

Redirecione a aplicação para consumir o backend do Heroku

#### Heroku

Crie um projeto no modo free com o nome desejado.

Recomendamos criar uma branch em seu repositório contendo apenas a pasta backend para que neste passo a branch seja associada na sessão "Manual Deploy" e "Automatic deploys".

É necessário criar um projeto com um banco de dados mysql associado, neste projeto, utilizamos o ClearDB MySQL. Guarde as informações referente ao banco como nome, senha, host, etc para adicionar no seu arquivo `.env`

No menu "Deploy" do Heroku, como "deploy method", associe a conta do Github onde está seu repositório com o fork deste projeto.

Adicione todas as variaveis de ambiente do seu arquivo `.env` no menu Settings > Config Vars > Reveal Config Vars.

A url do seu ambiente backend na nuvem é gerada pelo Heroku no menu Settings > App Information. Adicione esta url ao codigo no arquivo backend/src/app.js

## :computer:O código

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
* MySQL

O time de Front-ends utilizou JavaScript, CSS, React, Styled Components e Redux. A linguagem de marcação de texto escolhida foi HTML.

O time de Back-ends utilizou Node.js, o framework Express, o ORM Sequelize.

Para criptografia de senhas, o bcriptjs e para token, o padrão de autenticação JWT.

O banco de dados utilizado foi o MySql e para sua criação e população, Migrations, conforme padrão da documentação.

Os testes foram efetuados com Jest.

Foram criados diferentes ambientes para desenvolvimento, teste e produção.

Todo o código foi baseado na arquitetura Model-View-Controller (MVC) e modelagem Domain Driven Design (DDD).

O [Deploy](https://feira-republica.herokuapp.com/) back-end foi efetuado por meio do aplicativo Heroku.

## Equipe  :crown:

O projeto foi desenvolvido por

##### Front-ends:

* [Manuela Silva](https://github.com/netuninho)
* [Victor Hugo de Souza Feracin](https://github.com/victorFeracin)
* [Israel Silva](https://github.com/israel53)

##### Back-ends:

* [Emily Marcolino](https://github.com/emilymarc)
* [Caroline Silva Lima - Karu](https://github.com/karumundo)
* [Geovane Silva](https://github.com/Projetosgeovane)
* [Gefferson Oliveira](https://github.com/GeFFz)
* [Welton Rodrigues](https://github.com/WeltonDev)

##### **Product Designers**

* Ariane Hart
* Bruna Silva
* Priscila Alves de Araujo

:purple_heart: Projeto realizado no decorrer de três semanas de empenho do grupo 7 - Desafio Chefão (Gama Academy)  :alien:
