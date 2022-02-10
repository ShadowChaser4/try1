const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var new_item = ['Buy food', 'Cook food', 'Brush the teeth']

app.get('/', (req, res)=>{



  var today = new Date();
  var day = '',
  array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  day = array [today.getDay()];
    res.render("list", {kindofday: day, newitem :new_item});
})


app.listen(2000, ()=>{
  console.log("server is running in port 2000")
})
app.post('/', (req, res)=>{
  if (req.body.new_item !='')
  {  new_item.push(req.body.new_item);
  }
  res.redirect('/') 

})
