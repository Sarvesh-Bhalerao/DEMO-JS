const express = require('express')
const mongoose = require('mongoose')      // similar to adding header files 


const app = express()       // to start express framework
const url = 'mongodb://localhost/eventsDB'

mongoose.connect(url,{useNewUrlParser : true,
 useUnifiedTopology :true
});


const  con = mongoose.connection

con.on('open',()=>{
    console.log('connected......')
})

app.use(express.json())


const eventRouter = require('./routes/events')
app.use('./events',eventRouter)
app.listen(27017,()=>{
    console.log('Server started')
})