# cc-wallet
Backend
Packages and Tecnologies
  Express
  Typescript
  TypeORM
  Docker
  DDD with SOLID
  
  Frontend
Packages and Tecnologies
Vue3
Vuex4
Axios

Iniciando a aplicação:

Primeiro abra a pasta cc-wallet-api/src e rode o comando a baixo para instalar as dependências do projeto:

npm i

Depois use o comando seguinte para subir o container docker:

docker-compose up -d

Se houver algum erro tente rodar o seguinte comnado para reparar o erro de comunicação com o docker compose:

sudo chmod 666 /var/run/docker.sock

Feito isso é só rodar o script start na mesma pasta para iniciar a api no servidor local:

npm start

Com a api ja funcionando é só rodar o comando a baixo na pasta frontend/cc-wallet-app e clicar no link que irá aparacer no terminal:

npm run serve
