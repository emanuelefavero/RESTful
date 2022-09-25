const express = require('express')
const Model = require('../models/model')

const router = express.Router()
// Post
router.post('/post', async (req, res) => {
  // Create a new model using the Model schema
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  })

  try {
    // Save the model to the database using the data.save() method
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Get all
router.get('/getAll', async (req, res) => {
  try {
    // Fetch all data from database using Model.find()
    const data = await Model.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get by ID
router.get('/getOne/:id', async (req, res) => {
  try {
    // Fetch data by id from database using Model.findById()
    // The id is passed as a parameter in the URL
    const data = await Model.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//  Update by ID
router.patch('/update/:id', async (req, res) => {
  try {
    // Update data by id from database using Model.findByIdAndUpdate()
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }
    const data = await Model.findByIdAndUpdate(id, updatedData, options)
    res.send(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    // Delete data by id from database using Model.findByIdAndDelete()
    const id = req.params.id
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document deleted: ${data}`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
