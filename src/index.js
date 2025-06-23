const express = require('express');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routers/index');


const {Airplane}=require('./models/index');

const setAndstartServer=async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    


    app.listen(PORT,async()=>{
    console.log(`app is listning at ${PORT}`);

});

};

setAndstartServer();