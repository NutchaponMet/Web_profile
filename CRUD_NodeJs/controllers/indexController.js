const Data = require('../models/inform')


module.exports = async(req,res) =>{
    try{
        const doc = await Data.find({})
        res.render('index',{person:doc})
    }catch(err){
        console.error(err);
    }
}

