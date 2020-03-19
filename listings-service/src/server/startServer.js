import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import accessEnv from "#root/helpers/accessEnv";
import routes from "./routes";

const PORT = accessEnv("PORT", 7100); // running listings service on 7100

const app = express();

app.use(bodyParser.json());

app.use(
    cors({
            origin: (origin, cb) => cb(null, true),
            credentials: true
        })
);

routes(app);

app.listen(PORT, "0.0.0.0", ()=>{
    console.info(`listings service is running on ${PORT}`);
});