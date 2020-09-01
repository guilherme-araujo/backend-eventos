import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use('/backend-eventos',router)

export { app }