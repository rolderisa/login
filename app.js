const express = require('express');
const fs = require('fs');
const app = express();
const path = __dirname
app.get('/', (req, res) => {
    res.sendFile(path +'/login.html');
    const userFile = fs.readFileSync(path + '/user.txt').toString()
    let email = userFile.split("\n")[0].split(':')[1]
    let password = userFile.split("\n")[1].split(':')[1]
    let find = req.query
    let emailUser = find.email
    let passwordUser = find.password
    if(email.trim() == emailUser && password.trim() == passwordUser){
        res.end('You have logged in succesfully')
    }else{
        res.end('Invalid credentials')
    }
});
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});