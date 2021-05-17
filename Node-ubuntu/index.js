const express = require('express')
const app = express();

app.get('/',(req,res) => {
    res.send('Hey From Docker!!');
});

app.listen(5000,()=>{
    console.log("Application listening on Port 5000");
})