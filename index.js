//
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    PORT: 3100,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.PORT, () => {
        console.log(`http://localhost:${app.config.PORT}`);
    });
};

app.handleReqRes = (req, res) => {
    res.end("Hello World");
};

app.createServer();
