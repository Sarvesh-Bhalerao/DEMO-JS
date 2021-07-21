const express = require('express')
const router = express.Router()
const Alien = require('../models/events')


router.get('/',async(req,res)=>{
    try{
        const events = await Event.find()
        res.json(events)
    }catch(err){
        res.send('Error'+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id)
        res.json(event)
    }
    catch(err){
        res.send('Error : '+err)
    }
})
router.post('/',async(req,res)=>{
    const event  = new Event ({
        name  : req.body.name,
        cell_name : req.body.cell_name,
        event_date : req.body.event_date,
        event_month : req.body.event_month,
        event_dis : req.body.event_dis,
        time : req.body.time,
        type : req.body.type
    })

    try {
        const a1 = await event.save()
        res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports  = router