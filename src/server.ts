import { app } from "./app";

import * as dotenv from "dotenv";

console.log(process.env.NODE_ENV)

const envFile = process.env.NODE_ENV === "development" 
    ? __dirname+'/../.env.dev' 
    : __dirname+'/../.env' 

const result = dotenv.config({ 
    path: envFile
});



app.listen(3333)