let express= require('express');
let app = express();
const port=3000;
//const a= require("./mymodule");

app.get('/', function (req, res) {
    res.send('hello there!');
  });
  app.get('/profile', function (req, res) {
    res.send({
        name:"Manoj",
        age: 24
    });
    app.get('/info', function(req,res) {

    })
  });
  app.listen(3000, function(){
    console.log(`The server is running on http://localhost:${port}`)
  });
