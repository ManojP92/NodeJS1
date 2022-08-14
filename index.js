var http = require('http');
const port=8080;
const mymodule= require("./mymodule");
//create a server object:
http.createServer( function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
http.createServer('/profile', function (req, res) {
  res.write({
      name:"Manoj",
      age: 24
  });
});
http.listen(port,()=>console.log(`It's alive on http://localhost:${port}`)); //the server object listens on port 8080
