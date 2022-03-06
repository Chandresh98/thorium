const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const requestIp = require('request-ip');   // npm i request-ip imported
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const callFunction = function(req,res,next){
//     const d =  middle.mid
//     res.send(d)
// next()}

// app.use(callFunction)

// app.use('/', function(req,res){})
mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/chandresh98-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
