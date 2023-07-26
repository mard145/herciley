const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('listening on port', port)
    }
})