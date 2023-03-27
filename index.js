const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("views"))

const emailDB = "krishnadevv12@gmail.com"
const passwordDB = "123"

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    if(email === emailDB && password === passwordDB ){
        res.write("<h1>Login successfull!</h1>")
    }else{
        res.write("<h1>Login failed!</h1>")
    }
})

app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`);
})

