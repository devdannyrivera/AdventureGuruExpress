import express from 'express'
import dotenv from 'dotenv'
import { expressAdapter } from './lambda'

dotenv.config()

const app = express()
const port = process.env.PORT

app.post('/alexa', expressAdapter.getRequestHandlers())

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
