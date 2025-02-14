const http = require('http');
const server = require('./listener/server');
const logger = require('./utils/logger');
const config = require('./utils/contant').config
const connectDb = require('./app/dbconnect')

connectDb.dbInitialize()

let startServer = async ()=>{
    const app = http.createServer(server)
    app.listen(config.PORT)
    app.on("listening",()=>{
        app.timeout = 90000;
        logger.info(`Server is listening on port ${config.PORT}`)
    })
    app.on("error",(error)=>{
        logger.error("!Unable to start the Server:", error)
    })
}


startServer()
