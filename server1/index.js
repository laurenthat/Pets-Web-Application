'use strict';

const express = require('express')
const app = express()
const port = 3000

let requestCounter = 0;

//this shows all contents of public folder in the url address
app.use(express.static('public'));
app.set('view engine', 'pug');


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

//this requests a JSON
app.get('/catinfo', (req, res) => {
    const cat = {
        name: "Frank Catman",
        birthdate: "2022-06-25",
        weight: 6,
      };
    res.json(cat);
});

app.get('/test', (req, res) => {
    console.log('someone is trying to test me.');
    requestCounter++;

    //example of using pug
    res.render('test', {
        title: "Pug test page",
        header1: "Pug test page",
        header2: "Counter",
        exampleText: "Page requested" + requestCounter + " times.",
    });

    //basic html as string
    //res.send('<h1>TEST page</h1><p>' + requestCounter + '<p>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});