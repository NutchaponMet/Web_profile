const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 8000
const mongoose = require('mongoose')

//  Connect MongoDB
const dburi = 'mongodb+srv://admin:<password>@'
mongoose.connect(dburi,{
    useNewUrlParser:true,
}).catch(err=> console.log(err))

// Controller
const indexController = require('./controllers/indexController')
const formController = require('./controllers/formController')
const createController = require('./controllers/createController')
const editControl = require('./controllers/editController')
const deleteControl =require('./controllers/deleteController')
const updateControl = require('./controllers/updateController')

// setting project
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())
app.set('view engine','ejs')


// route page
app.get('/',indexController)
app.get('/form', formController)
app.post('/create/data',createController)
app.get('/:id', editControl)
app.get('/delete/:id', deleteControl)
app.post('/updatedata/:id',updateControl)

app.listen(port, ()=>{
    console.log(`Server running at port: http://localhost:${port}/`);
})

