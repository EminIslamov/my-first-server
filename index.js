const http = require('http');

// импортируем модуль path
const path = require('path');

// импортируем модуль fs
const fs = require('fs');

// создаем переменную сервера и принимаем в колбек нужные параметры
const server = http.createServer((req, res) => {
    // отправляем статус 200 и заголовок с указанием типа ответа
    res.writeHead(200, {
        "Content-type": "text/html"
    });

    // читаем содержимое файла
    fs.readFile(path.resolve(__dirname, 'pages', 'index.html'), (err, data) => {
        // если нет ошибок, то...
        if(!err) {
            // ...формируем тело ответа добавив в него содержимое html-файла
            res.write(data.toString());
        }

        // завершаем отправку ответа внутри колбек функции, т.к. write()
        // не может вызываться после end().
        res.end();
    })
});

// слушаем созданный сервер на 3000 порту...
server.listen(3000)