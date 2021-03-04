var generateImage = require('random-image-creator');

const http = require("http");

const fs = require("fs");

http.createServer(function (request, response) {

    console.log(`Запрошенный адрес: ${request.url}`);

        response.setHeader("Content-Type", "text/html");

    response.end("<img src='" + generateImage(280,400) + "' >");



}).listen(3000);