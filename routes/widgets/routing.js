const express = require('express');
const widgetRouter = express();
const contactWidgetRoute = require( './contact-widget' );

// Client Routes
widgetRouter.use( '/contact', contactWidgetRoute );

module.exports = widgetRouter;
