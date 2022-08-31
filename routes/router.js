const express = require('express');
const apiRouter = express();
const widgetRoute = require( './widgets/routing' );
const authRoute = require( './auth' );
const userRoute = require( './user' );
const companyRoute = require( './company' );
const contactRoute = require( './contact' );
const workerRoute = require( './modules/worker' );


// Authentication Routes
apiRouter.use( '/auth', authRoute );
// User Routes
apiRouter.use( '/user', userRoute );
// Company Routes
apiRouter.use( '/company', companyRoute );
// Contact Routes
apiRouter.use( '/contact', contactRoute );
// Worker Routes
apiRouter.use( '/worker', workerRoute );

// Widget Routes
apiRouter.use( '/widget', widgetRoute );

module.exports = apiRouter;
