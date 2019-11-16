const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes



//start the server
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en puerto: ', app.get('port'));
  });