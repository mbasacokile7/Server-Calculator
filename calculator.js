import express from "express";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//The code below is the code I  will use, everytime I want to use bodyParser
// Body Parser  allows use to go into any of the routes and use req.body (request.body: past version of the HTTP Request)
// Use body parser, together with urlencoded() when we want to access form data. body parser will return an object of the form data following the name attritbutes of the form elements)
// Example: {"num1": 1, "num2": 2, "submit": }

app.use(bodyParser.urlencoded({extended: true}));
//When we want to send files using the get() method, we use the sendFiles() method inthe callback function
// Use the keyword: __dirname to get current filesystem directory,no matter the web app is hosted.
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

//Adding post method
app.post("/bmicalculator", function(req, res){
    let userHeight= req.body.height;
    let userWeight = req.body.weight;
    let result = Number(userWeight) / (Number(userHeight)*Number(userHeight));
    result = result.toFixed(2) ;

    res.send("The result of the calculation is: "+ result);

})


//Port will listen on port 3000
app.listen(3000, function(){
    console.log("Server lsitening on Port 3000")
});