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

        for(let i=0; i<10; i++) {
            await sleep(1)
            channel.sendToQueue(queue, Buffer.from(`Message with id = ${i}`))
        }

        channel.close()
        connection.close()
    })
})
