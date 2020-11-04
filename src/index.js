const app = require('./server');
const http = require('http');
require('./database');

/* routes */
app.use('/api',(req,res)=>{
  res.json({message:"Hello"})
});

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})