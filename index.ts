import {app} from "./main.js";
const port = 8080;
app.listen(port, () => {
    console.log(`Сервер начал прослушивание на http://localhost:${port}`);
});