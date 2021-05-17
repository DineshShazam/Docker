const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host:'redis-server',
    port: 6379
});

client.set('visits',0);

app.get('/',(req,res) => {
    client.get('visits',(err,val) => {
        if(err) {
            res.send('Unable to get the Visits !')
        } else {
            res.send('Number of visits '+val);
            client.set('visits', parseInt(val)+1)
        }
    })
})

app.listen(5001,(req,res) => {
    console.log('Application listening in port 5001');
})