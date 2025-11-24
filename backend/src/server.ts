import express, { Request, Response } from 'express'
import { authRouter } from './routes/auth-routes'
import errorMiddleware from './middlewares/error-middleware'
import cookieParser from 'cookie-parser'


const app = express()
app.use(express.json())
app.use(errorMiddleware)
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/auth', authRouter)



app.get('/', (req: Request, res: Response) => {
    res.send('MY LOAN BACKEND WORKING')
})

export default app