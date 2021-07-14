const http = require("http");

const requestListener = function(request, response) {
    response.end("hello world!");
}
const app = http.createServer(requestListener);

app.listen(3000, () => {
    console.log('origin listening on 3000')
});