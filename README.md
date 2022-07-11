<p align="center">
  <img src="frontend/republica-hippie/src/assets/logo.png" alt="Logo República Hippie">
</p>

# *Feira da República*

Projeto de Conclusão do Curso Gama Experience Turma 41 - XP41

###### Prévia

<br>

<div>
<img src="https://github.com/emilymarc/feira-republica-xp/blob/main/Republica%20Hippie.gif" alt="preview"/>
</div>

<br>

Para acessar a página da web fruto deste projeto, [clique aqui](https://feira-republica.netlify.app/)

A documentação da API pode ser conferida neste [link](https://documenter.getpostman.com/view/8182997/UzJPMafP)

Para mais detalhes do projeto, veja nossa pagina no [Notion](https://www.notion.so/Feira-Republica-dd0bf04a8e194a1989fa39cb7c32c319)

## Objetivo  :bulb:

A praça da República é um cartão postal da cidade de São Paulo - SP, Brasil, e no centro da praça se encontra uma feira de artesanatos conhecida como Feira de República.

Apesar da popularidade da feira e da existência de uma associação dos artesãos que nela expõe seus produtos, não existe uma plataforma de e-commerce destinada à venda on-line dos artesanatos ali comercializados.

Assim, com o intuito de possibilitar vendas on-line, o cliente (Associação de Artesãos) solicitou a criação de um e-commerce no qual sejam expostos os produtos vendidos na feira e indicados os respectivos artesãos/expositores.

Uma vez que a maioria dos expositores não possui muita habilidade com uso de aplicativos, a Associação de Artesãos entendeu desnecessário, a princípio, o cadastramento dos artesãos/expositores como usuários do sistema, deixando somente a Associação como administradora da plataforma.

Na ideia de negócio projetada pela nossa cliente (Associação de Artesãos), ela cadastra de forma centralizada os produtos e organiza as entregas.

O cliente, por sua vez, se cadastra na plataforma e, logado, pode comprar produtos.

<br>

## Como utilizar  :surfer:

### Pré-requisitos

* Git ([https://git-scm.com/](https://git-scm.com/))
* Node JS ([https://nodejs.org](https://nodejs.org/))
* Conta no Heroku
* Conta no Netlify
* Instalar as dependencias corretamente
* VS Code ou outra IDE compativel

A documentação da API pode ser conferida neste [link](https://documenter.getpostman.com/view/8182997/UzJPMafP)

#### *Para **utilizar o projeto** :*

```
# clone o repositório e entre na pasta do backend para acessar o servidor
git clone https://github.com/emilymarc/feira-republica-xp.git

# Para **INICIAR O BACK-END**, acessar a pasta backend, abrir o terminal e executar as dependencias:
cd backend
npm install

# Ainda na pasta backend, para **iniciar o sequelize-cli** digitar na linha de comando do terminal:
npx sequelize-cli init


```


A execução do projeto também depende da **criação de um banco de dados** e para isso se faz necessário, na linha de comando do terminal:

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

<br>

:warning: Mas atenção: Não esqueça do comando ```npm run dev``` para manter o servidor ativo.


Agora já sabe como navegar por essa maravilha  :ship:



#### Deploy



## Equipe  :crown:

O projeto foi desenvolvido por

###### Front-ends:

* [Manuela Silva](https://github.com/netuninho)
* [Victor Hugo de Souza Feracin](https://github.com/victorFeracin)
* [Israel Silva](https://github.com/israel53)

###### Back-ends:

* [Emily Marcolino](https://github.com/emilymarc)
* [Caroline Silva Lima - Karu](https://github.com/karumundo)
* [Geovane Silva](https://github.com/Projetosgeovane)
* [Gefferson Oliveira](https://github.com/GeFFz)
* [Welton Rodrigues](https://github.com/WeltonDev)

###### **Product Designers**

* Ariane Hart
* Bruna Silva
* Priscila Alves de Araujo

:purple_heart: Projeto realizado no decorrer de três semanas de empenho do grupo 7 - Desafio Chefão (Gama Academy)  :alien:
