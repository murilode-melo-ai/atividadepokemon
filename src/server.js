import express from  'express';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('oi')
});

app.listen(port,()=>{
 console.log(`api rodando em porta: http://localhost:${port}`);
});
