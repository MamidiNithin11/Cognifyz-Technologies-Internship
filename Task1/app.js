const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.render('result', { username, password });
    } else {
        res.send('Please enter username and password');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
