const http = require("http");

const requestListener = function(request, response) {
    if(request.url == '/'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Home Page!\n");
    } else if(request.url == '/user'){
        if (request.method == 'GET') {
            // 逻辑 ... ...
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("return users\n");
        } else if (request.method == 'POST') {
            // 逻辑 ... ...
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("add user success\n");
        }
    } else{
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found!\n");
    }
}

const app = http.createServer(requestListener);

app.listen(3000, () => {
    console.log('origin listening on 3000')
});