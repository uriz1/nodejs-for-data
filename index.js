const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors())
app.get('/hero1', function (req, res) {
  res.send({hero1: 60})
});
app.get('/getlist', function (req, res) {
  res.send({sensor_suhu: [{suhu:30, waktu: "2002-01-01 11:00"},{suhu:40, waktu: "2002-01-02 12:00"},{suhu:45,waktu: "2002-01-03 11:00"}]});
});
app.get('/hero2', function (req, res) {
  res.send('Dyroth.')
});

app.get('/hero3', function (req, res) {
  res.send('Claude.')
});

app.post("/suhu2", (req, res) => {
  var suhu = req.body.suhu;
  console.log(suhu)
  res.send("Data yang terkirim adalah "+ suhu);
});

app.listen(port, ()=>{
  console.log("App running on http://localhost:3000/")
});



















// const express = require('express');
// var cors = require('cors')
// const app = express();
// const port = 80;
// app.use(express.json());
// app.use(cors())
// app.get('/helloworld', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/home', (req, res) => {
//     res.send("Ini adalah home")
//   });
// app.get("/getsensor", (req, res) => {
//   res.send({getsensor: 100});
// })

//   app.post('/sensorpost', (req, res) => {
//     var a = req.body;
//     console.log(req.body.suhuruang)
//     res.send("data yang terkirim adalah " + req.body.suhuruang);
//   });

// app.listen(port, () => {
//     console.log(`cli-nodejs-api listening at http://$localhost:${port}/`)
// });

// const http = require('http');
// var randomWords = require('random-words');
// console.log(randomWords());

// const hostname = '127.0.0.1';
// const port = 80;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end(randomWords() + '\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`);
// });