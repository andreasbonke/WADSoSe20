const express = require('express')
const app = express()
const port = 3300

const merchant_model = require('./contact_model')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

// ToDO add bcrypt/ JWT
// ToDO add auth Token to requests (generation and check)
// ToDO add signup endpoint

/**
 * endpoint to listen for get requests
 */
app.get('/adViz/contacts', (req, res) => {
    merchant_model.getContacts()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

/**
 * endpoint to listen for get request to get specific contact
 */
app.get('/adViz/contacts/:id', (req, res) => {
    merchant_model.getContact(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

/**
 * endpoint to listen for post requests
 */
app.post('/adViz/contacts', (req, res) => {
    console.log(req.body);
    merchant_model.createContact(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

/**
 * endpoint to listen for post requests to check login credentials
 */
app.post('/login', (req, res) => {
    merchant_model.checkCredentials(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(401).send(error);
        })
})

/**
 * endpoint to listen for put requests
 */
app.put('/adViz/contacts/:id', (req, res) => {
    merchant_model.updateContact(req.params.id, req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

/**
 * endpoint to listen for delete requests
 */
app.delete('/adViz/contacts/:id', (req, res) => {
    console.log(req.params.id)
    merchant_model.deleteContact(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

/**
 * starts server and prints port
 */
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
