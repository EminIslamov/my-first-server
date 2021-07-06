const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let pageName = ''
    if (req.url === '/') {
        pageName = 'index.html'
    }

    if (req.url === '/about') {
        pageName = 'about.html'
    }

    if (req.url === '') {
        res.writeHead(404, {
            'Content-type':'text/html'
        })

        res.write('Ошибка, страница не найдена')

        res.end()
    } else {
        fs.readFile(path.resolve(__dirname, 'pages', pageName), (err, data) => {
            res.writeHead(200, {
                'Content-type':'text/html'
            })

            res.write(data.toString())

            res.end()
        })
    }
})

server.listen(3000)