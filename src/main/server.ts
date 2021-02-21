import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import '../infra/typeORM'
import { userRouter } from './routes/UserRoutes'
import { postRouter } from './routes/PostRoutes'

const app = express()
app.use(cors())

app.use(express.json())

app.use('/user', userRouter)
app.use('/post', postRouter)

app.listen(3333, () => console.log('Server started at http://localhost:3000'))
