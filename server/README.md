# ParkTime
### Parktime MVP
## API

* GET **/get_data/:sec** Query do setor sec - Retorna json do setor  
* GET **/get_all_data** Query de todos os setores -- Retorna lista de setores  
* GET **/reloadDB** Forçar reload do db (deve ser removido apos testes) -- retorna succces  
* POST **/add** Adicionar qualquer objeto  -- Retorna succes  
* POST **/book** Reserver uma vaga  -- status 1 se o conseguiu reservar, 0 se houve erro, -2 se o setor não existe (Só foi testado com setor existente e com vaga, deve ser testado sem vaga  com setor que não existe)  

**Booking template**
```javaScript
let booking = {
    sec: sector  //Setor da reserva
    lp: license  //Placa do carro que ira reservar
}
```


#### Server 
port configuration is on
server/config/serverConfig.json **Remeber to change the request path on testerClient**
### Environment setup
navigate to the server folder
#### NodeJS
```bash
$ npm install express --save #used for HTTP requests and static server
$ npm install nodemon -g #Server watcher -- Optiopna
$ npm install body-parser --save #Parser for post responses
$ npm install nedb --save #Install NeDB (A MongoDB subset)
```
#### Database

Inside server folder create a folder called parkTimeDb **(if database is not yet created)**
Then run **(If database is not yet populated)**
```bash
$ cat config/setores_total.json >> parkTimeDb/parkTime.db  #popular o banco de dados
```
__NeDB__ is a mongoDB based fully javaScript lite database 

#### TesterClient
TesterClient is an html page for testing the API
It contains samples of how to use the API as well


#### Runing the server
from the server folder (this will deploy the testerClient application together)
```bash
$ node server.js
```





