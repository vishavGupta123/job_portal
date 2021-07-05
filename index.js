const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors({
    origin:true,
    credentials:true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routes'));

app.listen(process.env.PORT || 3000,(err)=>{
    if(err){
        console.log('error in connecting the server');
        return;
    }
    console.log("Successfully started the server ",port);
})