# 

## POKRETANJE MONGO itd...

1) pokrenuti mongodb server
komanda za startovanje mongodb
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="d:\datamongo\db"

2) pokrenuti aplikaciju MongoDB Compass

3) konektovati se u MongoDB Compass na bazu
U MongoDB Compass na tabu New Connection kliknuti na 
Fill in connection fields individually

a zatm ukucati sledece polja:

Hostname: localhost
Port: 27017

a preostala polja ostaviti prazna.
Zatim kliknuti na connect


## POKRETANJE NODE EXPRESS SERVERA

- pokretanje se vrsi u folderu aplikacije komandom
npm start

## CORS...
npm install --save cors



## UPUTSTVA ZA DOCKER

Pokrenuti Docker Desktop

Zatim

docker build -t drugidocker .

docker run -p 3001:3001 drugidocker


Moze se na priemr startovati i na portu 3005 sa komandom

docker run -p 3005:3001 drugidocker

