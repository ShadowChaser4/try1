const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

let new_item = ['Buy food', 'Cook food', 'Brush the teeth'],
new_work_item = [];


app.get('/', (req, res)=>{
  res.render("list", {kindofday: date.getday(), newitem :new_item});
})

app.get('/work', (req, res)=>{
  res.render("list", {kindofday:'Work List', newitem : new_work_item});
})

app.get('/about', (req, res)=>{
  res.render('about')
})



app.post('/', (req, res)=>{
  if (req.body.list !='Work List')
  {
    if (req.body.new_item != ''){new_item.push(req.body.new_item);}
    res.redirect('/')
  }

 if (req.body.list == 'Work List')
 {
   if (req.body.new_item != ''){new_work_item.push(req.body.new_item);}
   res.redirect('/work')
 }

})


app.listen(2000, ()=>{
  console.log("server is running in port 2000")
})
