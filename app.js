const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const model = require(__dirname + "/mongooseModuel.js");
const thing = model.usual;
const list = model.list;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

//setting up the database
 mongoose.connect("mongodb://localhost:27017/todolistDB")


 const items = [{ //things to enter into the database
        name : "Welcome to your todolist !"
 },
 {
   name : "Hit the + button to add a new item "
 },
 {
   name : "<-- Hit this to delete an item"
 }]

app.get('/', (req, res)=>{

    thing.find({}, (err, docs)=>{
     if (docs == 0)
     {



       thing.insertMany(items, (err)=>{  //inserting things into the database
          console.log(err)
        })

       res.redirect('/');
    }

        else{
       res.render("list", {kindofday: date.getday(), newitem: docs });
         }
   })
})




app.get('/:customlistname', (req, res)=>{

  const customlistname = req.params.customlistname;
   list.findOne({name : customlistname}, function (err, foundlist){
     if (!err){
       if (!foundlist)
       {
         const liste = new list ({
           name : customlistname,
           items : items
         })
         liste.save();
         res.redirect("/"+ customlistname);
       }
       else{
         res.render("list", {kindofday: foundlist.name, newitem: foundlist.items})
       }
     }

    })
  }
)


app.get('/about', (req, res)=>{
  res.render('about')
})



app.post('/', (req, res)=>{
  if (req.body.list !='Work List')
  {
    if (req.body.new_item != ''){
      const item = thing.create({name: req.body.new_item});
     }
    res.redirect('/')

  }

 if (req.body.list == 'Work List')
 {
   if (req.body.new_item != ''){
     const item = thing.create({name: req.body.new_item});
  }
   res.redirect('/work')
 }

})



app.post('/delete', (req, res)=>{
  thing.deleteOne({_id:req.body.checkbox}, (err)=>{console.log(err)});
  res.redirect('/')

})

app.listen(2000, ()=>{
  console.log("server is running in port 2000")
})
