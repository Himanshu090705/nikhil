const http = require('http');
const data=require('./data')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(JSON.stringify(data))
    res.end();
});

server.listen(3200, () => {
    console.log('Server is running on http://localhost:3000');
});
