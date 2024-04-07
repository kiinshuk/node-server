// const fs = require("fs");

// fs.readFile("./sample.txt","utf-8",(err,data) =>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });


// fs.writeFile("./sample.txt","hi my name is kinshuk sharma",(err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{

//     }
// })
// // console.log("i am first");


// const person = {
//     fistname : "kinshuk",
//     lastname : "sharma",
//     sum: ( a,b) =>{
//         console.log(a+b);
//     }
// };


// module.exports = person;

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname = "localhost";

const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req, res)=>{

    if(req.url ==="/"){
        return res.end(home);
      }
  if(req.url ==="/about"){
    return res.end("<h2>this is about page</h2>");
  }
  if(req.url ==="/contact"){
    return res.end("<h2>this is contact page</h2>");
  }
  if(req.url ==="/service"){
    return res.end(`<h2>this is service page</h2>`);
  }
  else{
    res.end("page not found");
  }

});

server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`)
})

