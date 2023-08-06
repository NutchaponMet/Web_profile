const Data = require('../models/inform')

module.exports = async (req,res) =>{    
    try{
        await Data.findByIdAndDelete(req.params.id, {useFindAndModify:false})
        res.redirect('/')

    }catch(err){
        console.error(err);
    }
}