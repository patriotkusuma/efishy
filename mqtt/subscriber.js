process.title = 'mqtt-demo-process-node'

const mqtt = require('mqtt')
const axios = require('axios')
const debug = process.env.NODE_ENV !== 'production'

let endpoint = 'https://efishy.my.id/messages'

if(process.env.NODE_ENV === 'production') {
    endpoint = 'https://efishy.my.id/messages'
}

if(debug){
    console.log('connecting')
}

const client = mqtt.connect('mqtt://mqtt.efishy.my.id:8883', {
    username: 'patriot',
    password: '05Juli!!'
})

client.on('connect', () => {
    if(debug) {
        console.log('connected')
    }

    client.subscribe('+/your-topic',{qos:1})
})

client.on('message',function(topic,message){
    if(debug) {
        console.log('this message :', message.toString());
    }
    axios.post(endpoint, {topic, message: message.toString()})
        .then(({ data }) => {
            if(debug) {
                console.log(data);
            }
        })
        .catch(error => {
            if(debug) {
                console.error(error);
            }
        });
});
