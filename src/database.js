const mongoose = require('mongoose');
const db ='mongodb://localhost:27017/myproject';;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Conexión a la base de datos establecida...'))
  .catch(err => console.log(`Error al conectar a la base de datos: ${err}`))