const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const app = express()
const port = process.env.PORT
// app.use((req, res, next) => {
//   res.status(503).send({ message: 'The site is under maintenance' })
// })

const multer = require('multer')
const upload = multer({ dest: 'images' })
app.post('/upload', upload.single('upload'), async (req, res) => {
  res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
  console.log('Server is up at ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days'
//   })
//   console.log(token)
//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// myFunction()
// const pet = {
//   name: 'Hat'
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//   // const task = await Task.findById('60af59c8b9f65a16c8aed184')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)
//   const user = await User.findById('60af59bab9f65a16c8aed182')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }
// main()
