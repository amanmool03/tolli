import express from 'express'
import compression from 'compression'
import dbConnect from './app/utils/dbconnect.js'
const app = express()

if (process.env.NODE_ENV !== 'production') {
   import dotenv from 'dotenv'
   dotenv.config({
      path: './.env',
   })
}

dbConnect()
app.use(compression())

app.use('/api/users', (req, res) => {
   res.send('hello lololosss')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
   console.log(`Server started at port :${PORT}`)
})
