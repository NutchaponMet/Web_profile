const inform = require('../models/inform')

module.exports = async (req,res) =>{
    try{
        const data = await req.params.id
        const result = await inform.findById(data)
        res.render('edit.ejs',{data:result})
    }catch(err){
        console.error(err);
    }
    
}
