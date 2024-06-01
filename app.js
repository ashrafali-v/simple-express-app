const express = require('express');
const app = express();


app.get('/',(req,res)=>{
  res.send('Hii there , your API is workign fine')
})
app.listen(3009,()=>{console.log('Server up and running');})