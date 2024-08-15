const express = require("express");
const mongoose = require('mongoose');

const app = express();

const port = 8000;
app.use(express.urlencoded());

mongoose.set('strictQuery', false);
const url = 'mongodb+srv://crudopration:admin1234@crudopration.bxw7c.mongodb.net/?retryWrites=true&w=majority&appName=crudopration'
mongoose.connect(url).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
});

app.use('/',require('./router/router'))
app.listen(port, (err) => {
    if(err)
    {
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
});
