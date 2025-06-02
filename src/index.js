const express = require('express');
const {PORT}=require('./config/serverConfig');


const setAndstartServer=async() => {
    const app = express();
    app.listen(PORT,()=>{
    console.log(`app is listning at ${PORT}`);
});

};

setAndstartServer();