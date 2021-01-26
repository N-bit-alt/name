const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
res.send('Hello World');
} );

app.get('/bye', (req, res) => {
    res.send('Bye Bye');
    } );

app.post('/', (a, b) => {
    console.log(JSON.stringify(a.body))
    b.send('Post');
});



app.listen(3000, () => console.log('Listening on port 3000...'));

