# Система быстрого прототипирования модулей на основе webpack
## Структура файлов

frontend
  layouts
    | шаблоны обвязки .jade
  modules 
    | Модули
    moduleName
      |.css - стили
      |.[jade, xsl] 
      |.js
      |data.json - данные
      |.md - описание модул
  routes
    | Сгенерированые странички
  styles
    | Стили для основных обвязок
  templates
    | Папка с шаблонами в формате json, тут лежат заготовки страниц которые можно генерировать командами из строки. 
    | Имя файла должно соотвествовать названию шаблона
public
    | Вся статика.
run
packege.json
server.js
webpack.config.js

## как работает 

### Рутер
Запускается сервет который смотрит на index.html в папке public. В нем подключется файл js генерируемый webpack. Сервер настроен на автоматическое отслеживание изменений в папке frontend.

Скрипт сначала подключает файл app.js в котором происходит посик маршрута из ссылки к которой обратился клиент. 
В зависимости адреса дергается нужный файл из папки routes (эти файлы генерируются из комндной строки по шаблону из папки templates) таким образом отркываются страницы наполенные модулями. 

### Модули
Модуль создается по средствам класса содержашимся в файле module.js. Метод render отрисовывает модуль так, чтобы была возможность отрисовать так-же все вложенные модули. 

Так же модуль может быть встален в специально определенные места вставки по ID блока или с явным указанием селектора вставки (свойство place);

Модули могут содержать свойства по умолчанию и переопределенные свойства. Переопределить свойства можно  как в теле модуля так и в месте вызова передав в конструктор соотрвестующий объект. 

Модуль как правила состоит из 3 или 4х файлов. Шаблон, стили, скрипт вызова и логика, возможно файл с статическими данными для отрисовки. 

Шаблоны сейчас поддерживаются в формате xslt и jade(pug) 

### Область применения

В таком виде система готова для создания относительно быстрых прототипов в среде аналогичной рабочей в виде статически страниц связанных между собой. Основным приемуществом является возможность использовать код прототипа в рабочей версии сайта, при должном качестве кода. Так же на выходе получается полность кликабельный и действующий образец интерфейса который без существенных изменений поподает в рабочий проект.  

 
команды:
npm run server - запуск сервер;
npm run newpage - создать новую страницу по готовому шаблону. После чего она будет доступна по пути 0.0.0.0:8080/pagename
