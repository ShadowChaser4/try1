const mongoose =  require('mongoose');

mongoose.connect("mongodb://localhost:27017/todolistDB", ()=>{
    console.log('connected')
})

const plannerSchema = {
     name: String,
}
const listSchema = {
  name: String, 
  items: [plannerSchema]
}



module.exports.usual = mongoose.model('thing', plannerSchema);
module.exports.list = mongoose.model("list", listSchema)
