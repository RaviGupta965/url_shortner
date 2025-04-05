import express from 'express'
import dotenv from 'dotenv'
import { dbconnect } from './dbconnect.js';
import { Url } from './models/url.model.js';
import shortid from 'shortid';
import { getOriginalUrl } from './controllers/url.js';

const app=express();
dotenv.config()
const port=process.env.PORT;
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log('server is running at port:',port);
})
dbconnect();

// rendering ejs file
app.get('/',(req,res)=>{
    res.render('index.ejs',{Url:null});
})

// redirecting to original link
app.get('/:shortkey',getOriginalUrl)

app.post('/shorten',async (req,res)=>{
    const LongUrl=req.body.longurl;
    const shortkey=shortid.generate();
    const url=`http://localhost:3000/${shortkey}`;
    console.log(url)
    // saving to database
    const newurl=new Url({shortkey,LongUrl});
    await newurl.save();
    res.render("index.ejs",{url});
})
