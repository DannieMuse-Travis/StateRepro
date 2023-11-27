import express,{Application} from "express"
import cors from "cors"

import { dbConfig } from "./config/DbConfig"
import { mainApp } from "./mainApp"

const port:number | string = process.env.Port||3344

const  app:Application= express()
app.use(cors())
app.use(express.json())
mainApp(app)

const server= app.listen(port,()=>{
    console.log("Server Just Dey🚀🌟")
    dbConfig()
})

process.on("uncaughtException",(error)=>{
    console.log("Server is shutting down because of uncaughtException")
    console.log(error)
    process.exit(1)
})

process.on("unhandledRejection",(reason)=>{
    console.log("Server is shutting down because of unhandledRejection")
    console.log(reason)

    server.close(()=>{
        process.exit(1)
    })
})
