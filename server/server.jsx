const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes')
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');
const cors = require('cors');

const {handleError, convertToApiError} = require("../server/middleware/apiError");
const { header } = require('express-validator');

//mongodb+srv://ri7ikkale27:<password>@clusterproject.yzbysve.mongodb.net/?retryWrites=true&w=majority

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// header('Access-Control-Allow_origin: *');
// header('Access-Control-Allow_Methods: POST,GET,OPTIONS,PUT,DELETE');
// header('Access-Control-Allow_Headers: Content-Type, X-Auth-Token, Origin, Authorization');

app.use(cors(corsOptions));

//body parse
app.use(express.json())

//sanitize
app.use(xss())
app.use(mongoSanitize())

// passport 
app.use(passport.initialize());
passport.use('jwt',jwtStrategy );


///routes
app.use('/api', routes)

//Error Handle
//error from server, moongose or any other 
app.use(convertToApiError)
app.use((err,req,res,next)=>{
    handleError(err,res)
})




const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})