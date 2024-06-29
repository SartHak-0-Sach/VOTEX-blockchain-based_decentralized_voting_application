const express = require('express');
const bodyParser = require('body-parser');
const hive = require('@hiveio/hive-js');
const app = express();
const session = require('express-session');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/api/authenticate', (req, res) =>
{
    const { username, signature } = req.body;

    hive.api.getAccounts([username], (err, result) =>
    {
        if (err || result.length === 0)
        {
            return res.json({ success: false, message: 'User not found' });
        }

        const publicPostingKey = result[0].posting.key_auths[0][0];
        const isValid = hive.auth.verify(signature, username + '{"login":"123"}', publicPostingKey);

        if (isValid)
        {
            req.session.user = username;
            res.json({ success: true });
        } else
        {
            res.json({ success: false, message: 'Invalid signature' });
        }
    });
});

app.listen(3000, () =>
{
    console.log('Server is running on port 3000');
});
