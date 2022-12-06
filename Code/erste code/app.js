const express = require("express");
const axios = require("axios");
const path = require("path");


const app = express()
const PORT = 3000; 

 

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
 });
 

 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/code.html'));
 })

   let lat = 51.02608
   let lon = 7.56473
   axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/forecast/?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=cbdde0896c84ef68241635a6f0686d23',
      responseType: 'json'
   })
      .then(function (response) {
         console.log(response.data)
        
      });
