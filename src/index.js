const app = require('./server');
const axios = require('axios');
require('./database');

/* routes */
app.use('/api',(req,res)=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch(error => {
      console.log(error);
    });
  res.json({message:"Hello"})
});

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})