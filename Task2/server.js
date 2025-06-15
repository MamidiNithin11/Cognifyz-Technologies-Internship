const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));



app.post('/api/register', (req, res) => {
    const { name, email, password, age, country } = req.body;

    const errors = {};

    const validateName = (name) => {
        return typeof name === 'string' && name.trim().length >= 2;
    };
    if (!validateName(name)) {
        errors.name = 'Invalid name';
    }



    // Mail Validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    if (!validateEmail(email)) {
        errors.email = 'Invalid email';
    } else if (users.some(user => user.email === email)) {
        errors.email = 'Email already registered';
    }



    // Password Validation
    const validatePassword = (password) => {
        return typeof password === 'string' && password.length >= 8;
    };
    if (!validatePassword(password)) {
        errors.password = 'Invalid password';
    }



    // Age Validation
    const validateAge = (age) => {
        const numAge = Number(age);
        return !isNaN(numAge) && numAge >= 18 && numAge <= 120;
    };
    if (!validateAge(age)) {
        errors.age = 'Invalid age';
    }



    // Country Validation
const validateCountry = (country) => {
    const validCountries = ['USA', 'UK', 'CA', 'AU', 'IN'];
    return validCountries.includes(country);
    };
    if (!validateCountry(country)) {
        errors.country = 'Invalid country';
    }

    // Store user data
    const newUser = {
        id: users.length + 1,
        name,
        email,
        age,
        country,
        registeredAt: new Date()
    };
    console.log(newUser)
    users.push(newUser);
    res.json({
        success: true,
        // we use redirectional url to redirect the user to the success page
        redirectUrl: `/success/${newUser.id}`

    });
});


app.get('/success/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        return res.render('success', { user }); 
    }
    res.status(404).send('User not found');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});