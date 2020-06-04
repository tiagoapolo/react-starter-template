require('dotenv').config();

const path = require('path');
const data = require('./data/data.json');
const config = require('./config.json');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Mocks
const useArr = [];
const tokenList = {};

function getMissingParameters(paramsArr, request) {
    const paramsSet = new Set(paramsArr);
    const requestSet = new Set(Object.keys(request.body || {}));

    return [...paramsSet].filter(el => !requestSet.has(el));
}

function handleSignup(req, res) {
    const params = ['name', 'email', 'password'];
    const missingParameters = getMissingParameters(params, req);

    if (missingParameters.length) {
        res.status(422);
        res.send({ error: `Missing required parameters ${missingParameters}`, values: missingParameters });
        return;
    }

    const { name, email, password } = req.body;
    const user = useArr.find(user => user.email === email);

    if (user) {
        res.status(409);
        res.send({ text: 'user already registered' });
        return;
    }

    const hash = bcrypt.hashSync(password, 10);
    const newUser = { name, email };
    useArr.push({ ...newUser, password: hash });

    res.status(201);
    res.send(newUser);
}

function handleLogin(req, res) {
    const params = ['email', 'password'];
    const missingParameters = getMissingParameters(params, req);

    if (missingParameters.length) {
        res.status(422);
        res.send({ error: `Missing required parameters ${missingParameters}`, values: missingParameters });
        return;
    }

    const { email, password } = req.body;
    const user = useArr.find(user => user.email === email);

    if (!user) {
        res.status(500);
        res.send({ text: 'user not registered' });
        return;
    }

    if (!bcrypt.compareSync(password, user.password)) {
        res.status(500);
        res.send({ text: 'invalid credentials' });
        return;
    }

    const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });

    const response = {
        'auth': true,
        'token': token,
        'refreshToken': refreshToken,
        'email': user.email,
    };

    tokenList[refreshToken] = response;
    res.status(200);
    res.json(response);
}

function handleToken(req, res) {
    const postData = req.body;

    if (postData.refreshToken && postData.refreshToken in tokenList) {
        const user = useArr.find(user => user.email === postData.email);
        if (!user) {
            res.status(500);
            res.send({ text: 'user not registered' });
            return;
        }

        const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });

        const response = {
            'auth': true,
            'token': token,
            'email': user.email,
        };

        tokenList[postData.refreshToken].token = token;

        res.status(200);
        res.json(response);
    } else {
        res.status(404);
        res.send('Invalid request');
    }
}

function handleTodos(req, res) {
    res.send(data);
}

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.post('/register', handleSignup);
app.post('/login', handleLogin);
app.post('/token', handleToken);

// Start secure routes
app.use(require('./modules/tokenValidator'));

app.get('/todos', handleTodos);

app.listen('8888', () => {
    console.log(`listening on port  ${'8888'} ...`);
});
