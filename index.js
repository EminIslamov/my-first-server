//Задача 2.2. Создай в проекте новую папку с именем pages. Внутри папки создай файл index.html с каким-нибудь HTML-кодом.
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile(path.resolve(__dirname, 'pages', 'index.html'), (err, data) => {
       res.writeHead(200, {
           'Content-type': 'text/html'
       })
       res.write(data.toString())
        res.end()
    })
})

server.listen(3000)