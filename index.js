// dependencies

const http = require('http');


// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3100,
};


// create server


app.createServer=()=>{
    const server =http.createServer()
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`)
    })
}

app.handleReqRes=(req,res)=> {
    res.end("Hello World")
}

app.createServer()