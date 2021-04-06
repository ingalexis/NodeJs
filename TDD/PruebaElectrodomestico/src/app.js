import express from "express";
import router from "../routes/index.js";

const app = express();
//app.disable('');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);

export default app;
