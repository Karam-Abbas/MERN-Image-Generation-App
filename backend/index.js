import 'dotenv/config'
import express from 'express';
import debug from 'debug'
import "./config/dbConfig.js"
const dbgr = debug('development:App.js');

const app = express();

app.post('/',(req,res)=>{
    const {prompt} = req.params;
    
    dbgr("working......")
})

app.listen(process.env.port,()=>{
 dbgr(`Listening to Port:${process.env.port}`)   
})  