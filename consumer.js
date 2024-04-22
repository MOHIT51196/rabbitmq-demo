const amqp = require('amqplib/callback_api')
const { sleep } = require('./utils')
const url = 'amqp://localhost'
const queue = 'alerts'
amqp.connect(url, (err, connection) => {
    if(err) {
        console.log(`Error while connecting to server : ${err}`)
        return
    }
    console.log(`Connected successfully`)
    connection.createChannel(async (channelError, channel) => {
        if(channelError) {
            console.log(`Error while creating a channel : ${err}`)
            return
        }

        channel.assertQueue(queue, {
            durable: false
        })

        channel.consume(
            queue, 
            (msg) => {
                console.log(`Received msg : \n${msg.content.toString()}`);
            },
            {
                noAck: true
            }
        )

        await sleep(30)
        channel.close()
        connection.close()
    })
})