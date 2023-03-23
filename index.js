// const http =require("http");
// const { url } = require("inspector");
// const { default: gfName } = require("./features");
// import path from "path";

// http.createServer((req,res)=>{


//     console.log(url) 
// });


// Server.listen(5000,()=> {

//     console.log("Server is Working");
// })


// // everything in nodejs is module http is one of the built in module

import { Express } from "express";

const app  = express();

app.get("/",(req,res)  => {

    res.json({

        sucess : true 

    }
    )
})

server.listen (5000,() => {

    console.log("Server is working geeks ")
});

