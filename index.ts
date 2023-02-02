import {app} from "./main.js";
const port = 8080;
//Да
app.listen(port, () => {
    console.log(`Сервер начал прослушивание на http://localhost:${port}`);
});