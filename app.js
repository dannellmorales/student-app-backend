//define our route handlers
//Separation of concerns

 const express = require('express');

 const app = express(); 


//Define our routes

//Healthcheck/ Handler  Route
app.get('/', (request, response) => {
    response.json({message: 'Service is running'});
});

module.exports = app;