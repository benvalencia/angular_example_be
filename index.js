const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
//Auth Routes
const apiRouter = require( './routes/router' );

//.env Config
dotenv.config();

//DB Connection
mongoose.connect(
    process.env["DB_CONNECT"],
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB Running...'))

app.use(express.json());
//Router Middleware
app.use(cors());
app.use( '/api', apiRouter);

app.listen( 3000, () => console.log( 'Server Running...' ) );
