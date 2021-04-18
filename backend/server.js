const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
// routes

app.get('/', (req, res) => {
  res.send('Home route')
})

const postRoute = require('./routes/posts.js')

app.use('/posts', postRoute)

// database connection

mongoose.connect(
  process.env.MONGO_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Mongodb connection successful')
  }
)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
