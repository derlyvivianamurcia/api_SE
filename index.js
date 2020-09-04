const express = require('express');
const app = express();

app.get('/json', function(req, res){
    res.json({hola: 'Media técnica PCJIC', apellido: 'Murcia'});
});

app.listen(5050, function(){
    console.log('El servido se encuentra activo')
})