const express =  require("express");
const mongoose  = require("mongoose");
const path = require("path");
const bodyParser = require("body-Parser");
const app =  express();



const port = 80;



//MONGOOSE CONNECT
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/contactdance');
}

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())


// PUG LINKING SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))


// ENDPOINTS 
app.get("/", (req,res)=>{
    res.render("index.pug");
})




// Starting the server
app.listen(port ,() =>{
   console.log(`The server listening at ${port}`)
})

