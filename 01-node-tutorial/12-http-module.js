const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('This is the homepage')
    } else if (req.url === '/about') {
        res.write('This is all about us.');
    } else {
        res.write(
            `<h1>OOPS! it happened again !</h1>
            <a href="/">Go bak to the home!</a>`);
    }
    res.end();
});

server.listen(7070);