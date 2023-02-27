//define our route handlers
//Separation of concerns


//import exterenal stuff(libraries)
//import express library
 const express = require('express');
const cors = require('cors');

// import our stuff (Our files, components)
const studentsData = require('./studentsData.json')


 //Int express application
 const app = express(); 

//Set up middleware

/*function that will work with req, res before the final 
route handler function*/
app.use(cors());   //this will add a header call"Active-Control-Allow-Origin" and add the * wild card


//Define our routes

//Healthcheck/ Handler  Route
app.get('/', (request, response) => {
    response.status(200).json({data: 'Service is running'});
});

app.get('/students', (request, response) => {
   try{
    const { students } = studentsData;
     response.status(200).json({ data: students });
   } catch (err) {
    response.status(500).json({ error: err.message });
    }
});

app.get('/students/:id', (request, response) => {
    try{
   const {id} = request.params;
   const { students } = studentsData;
    const student = students.find((student)  => student.id === id);
    if (student ){
        //Return 200
        response.status(200).json({data: student})
    } else{
        response.status(404).json({error: `could not find student with id ${id}` })
    }
    }catch (err){
        response.status(500).json({ error: err.message }) 
    }
});

module.exports = app;