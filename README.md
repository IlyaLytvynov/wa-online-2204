#Базовая структура проекта с настроенными webpack, less, babel
Для использования скачать, разархивировать, и выполнить следующие команды в терминал(командной строке)
1. npm install
2. npm start -команда которая запустит dev сервер, необходимо для авоматической компиляции less/ES6 файлов
3. Перейти в браузере по адресу http://localhost:8080
4. Для остановки дев сервера в консоле(терминале) необходимо нажать два раза CTRL+C
Если возникают ошибки компиляции то в терминале будут красные
сообщения об ошибке, в самом начале сообщения достаточно
точно описывается что пошло не так, обращайте на это внимание. Так же в случае проблем со сборкой просьба к вопросу прикладывать скриншот с текстом ошибки консоли
### Добавление новых страниц
Для добавления новых страниц выполнить команду 
`npm run new:page <имя страницы>`

например `npm run new:page my_cool_page` создаст и подключит страницу my_cool_page
### Файловая структура

assets - дирректория для хранения асеетов - шрифты изображения пример использования смотреть в common/styles/header.less
###
``` 
src
.
|
├──index - старница index.html и все что к ней относится
|   |
|   +-- scripts - скрипты, обязательно необходимо импортить в index.js  
|   +-- styles - все стили разделенные по файлам, так же необходимо импортить в index.less
|   +-- index.html - основной документ html, домашняя страница вашего сайта
|   +-- index.js - главный фаил js, весь скрипт который относится к данной странице импортится в данном файле(из дирректории scripts)
|   +-- index.less - основной фаил стилей
+- common - дирректория в которой хранятся общие файлы для всех страниц вашего сайта например стили и скрипты для использования нужно имопртить в главных файла страниц смотреть index/index.less
    |
    +- scripts
    |
    +- styles     
```

Для перехода на другие страницы не index, в адресной строке добавить к http://localhost:8080 /имя_страницы.html например http://localhost:8080/about.hml
