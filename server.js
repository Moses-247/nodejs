import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node!!</h1>');
});
server.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`);
});