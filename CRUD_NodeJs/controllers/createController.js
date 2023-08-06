const inform = require('../models/inform')

module.exports = async (req,res) =>{
    try{
        await inform.create(req.body)
        console.log("Data upload successfully!!!");
        res.redirect('/')
    }catch(err){
        console.log(err) 
    }
}

