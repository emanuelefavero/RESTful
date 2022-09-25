const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
})

// users = collection name
module.exports = mongoose.model('users', dataSchema)
