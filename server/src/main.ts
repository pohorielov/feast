import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'

async function start() {
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule)
    app.use(cookieParser())
    app.use(cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    }))

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()