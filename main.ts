import express, { Request, Response } from "express";
import { engine } from "express-handlebars";
import { routes } from "./routes/routes.js";

const app = express();
const port = 8080;

//настройка движка представлений и основной страницы
app.engine("hbs", engine(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
));

//настройка представлений
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('welcomepage', {
        title: 'MyPage'
    })
});

app.get('/reg', (req, res) => {
    res.render('reg')
})

app.use('/api', routes);


app.listen(port, () => {
    console.log(`Сервер начал прослушивание на http://localhost:${port}`);
});
