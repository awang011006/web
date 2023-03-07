const express = require("express");
const app = express();
const static_files_router = express.static('static_files')
app.use( static_files_router )


app.set('view engine', 'ejs')


app.get('/tictactoe', function(req, res){
    res.render('tictactoe')
})

app.get('/it_works_template', function(req,res){

  const render_dictionary = {
    'placeholder' : 'cooking with gas'
  }

  res.render('working_template', render_dictionary)
})


let page_counter = 0;

app.get('/gamble', function(req,res){
let gam = Math.random();
let result = "won";
if (gam>0.5)
{
    result = "lost";
}
  page_counter++;
 
  const render_dictionary = {
    'placeholder' : result,
    'count' : page_counter
  
  }

  res.render('gamble', render_dictionary)
})


app.get('/ejs_context_switching', (req,res) => { 
    res.render('context_switching_template');
});

const listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});