const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const users = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//  sign up Senario
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).render('error', { 
            message: 'Username and password are required' 
        });
    }

    if (users.some(user => user.username === username)) {
        return res.status(400).render('error', { 
            message: 'Username already exists' 
        });
    }
    users.push({ username, password });
    console.log(users);
    res.render('success', { 
        username: username,
        message: 'Registration successful! You can now login.' 
    });
});


// Login Senario
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    
    if (!username || !password) {
        return res.status(400).render('error', { 
            message: 'Username and password are required' 
        });
    }

    
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.render('success', { 
            username: username,
            message: 'Login successful!' 
        });
    } else {
        res.render('error', { 
            message: 'Invalid username or password' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
