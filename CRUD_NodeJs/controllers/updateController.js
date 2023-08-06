const inform = require('../models/inform')

module.exports = async (req,res) =>{
    try{
        const ID = req.params.id
        await inform.findByIdAndUpdate(ID,{
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email})
        console.log(`Updated Successfully!!`);
        res.redirect('/')
    }catch(err){
        console.error(err);
    }
}