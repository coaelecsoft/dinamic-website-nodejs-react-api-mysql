import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/App";
const axios = require('axios');

const PORT = 3016;
const app = express();

app.get('/podaci', async (req, res) => {
    try {
      const odgovor = await axios.get('https://js.awd.rs/api');
      const podaci = odgovor.data;
      res.json(podaci);
    } catch (error) {
      console.error(error);
      res.status(500).send('Greška t pri dohvatu podataka');
    }
    
  });

const router = express.Router();

app.use("/", express.static('build'));

app.use((req, res, next)=>{
    if(/\.css and \.js/.test(req.path)){
        res.redirect('/'+req.path);
    }else{
        next();
    }
});

app.get('*', async (req, res)=>{
    try {
        const odgovor = await axios.get('https://js.awd.rs/api');
        const podaci = odgovor.data;
        const title = podaci.find((item) => item.id === 1).title_sr_latn;
        const context=[];
        const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App podaci = {podaci} />
        </StaticRouter>
    )

const indexFile = path.resolve('./server/index.html');

fs.readFile(indexFile, 'utf8', (err, data)=>{
    if(err){
        console.log("error");
        return res.status(500).send('oops some error', 'error!');        
    }
   
    return res.send(
        data.replace('</head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>', `
        <title>${title}</title></head><body><div id="root">${app}</div>`)
    );
});
} catch (error) {
    console.error(error);
    res.status(500).send('Greška pri dohvatu podataka');
  }
});

router.use(express.static(path.resolve(__dirname, "..", "build"), {maxAge:'1d'}));

app.use(router);

app.listen(PORT, () => {
    console.log("App is launched");
  });