require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// mongodb+srv://admin:<password>@cluster0.wk1hhsc.mongodb.net/users
// /users = database name
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes')

mongoose.connect(mongoString)
const database = mongoose.connection
database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('Connected to database'))

const app = express()
app.use(express.json())
app.use('/api', routes)

app.listen(3000, () => console.log('Server started on port 3000'))
