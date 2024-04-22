# RabbitMQ Demo

Repository contains demo project developed in Nodejs including consumer and producer.
RabbitMQ use AMQP for transport and provide admin dashboard for mertices and stats.

## Run RabbitMQ server 
`docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management`

## Start sending messages
`npm run produce`

## Start listening 
`npm run consume`
