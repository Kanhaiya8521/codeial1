const express = require('express');
const app = express();
const port = 7000;

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})

