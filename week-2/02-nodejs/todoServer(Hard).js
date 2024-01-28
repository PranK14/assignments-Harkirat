const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyParser.json())

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return i
    }
  }
  return -1
}

function removeAtIndex(arr, index) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i])
  }
  return newArray
}

app.get('/todos', (req, res) => {
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  })
})

app.get('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) throw err
    const list = JSON.parse(data)
    const ind = findIndex(list, parseInt(req.params.id))
    if (ind === -1) res.status(404).send()
    else {
      res.json(list[ind])
    }
  })
})

app.post('/todos', (req, res) => {
  const todo = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    description: req.body.description,
  }
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) throw err
    const list = JSON.parse(data)
    list.push(todo)
    fs.writeFile('todos.json', JSON.stringify(list), (err) => {
      if (err) throw err
      res.status(201).json(todo)
    })
  })
})

app.put('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) throw err
    const list = JSON.parse(data)
    const id = findIndex(list, parseInt(req.params.id))

    if (id === -1) {
      res.status(411).json({ msg: 'no id found' })
    } else {
      list[id].title = req.body.title
      list[id].description = req.body.description
    }

    fs.writeFile('todos.json', JSON.stringify(list), (err) => {
      if (err) throw err
      res.status(201).json(list[id])
    })
  })
})

app.delete('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    if (err) throw err
    let list = JSON.parse(data)
    const id = findIndex(list, parseInt(req.params.id))
    if (id === -1) res.status(404).send()
    else {
      list.splice(id, 1)
      fs.writeFile('todos.json', JSON.stringify(list), (err) => {
        if (err) throw err
        res.status(201).json(list[id])
      })
    }
  })
})

app.listen(3000, () => {
  console.log('Succefully running on port 3000')
})
