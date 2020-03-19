import "@babel/polyfill";

import "#root/db/connection";
import "#root/server/startServer"; 

console.log(process.env.DB_URI);