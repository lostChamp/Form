import express from "express";
import { engine } from "express-handlebars";
import { regRoute } from "./routes/regRoute.js";
import {uploadRoute} from "./routes/uploadRoute.js";
import {welcomePageRoute} from "./routes/welcomePageRoute.js";
import hbs from "hbs";
const app = express();

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
//частичные представления
hbs.registerPartials('/views/partials');

app.use('/', welcomePageRoute);
app.use('/', regRoute);
app.use('/', uploadRoute);
app.use('/api', regRoute);
app.use('/api', uploadRoute);


export {app}
