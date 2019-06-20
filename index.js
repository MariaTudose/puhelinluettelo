require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')


app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))


morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/contacts', (req, res) => {
    Contact.find({}).then(contacts => {
        res.json(contacts.map(contact => contact.toJSON()))
    })
})

app.get('/api/info', (req, res) => {
    Contact.find({}).then(contacts =>
        res.send(`<p>Puhelinluettelossa on ${contacts.length} henkilön tiedot</p>\n${new Date}`)
    )
})

app.get('/api/contacts/:id', (req, res, next) => {
    Contact.findById(req.params.id).then(contact => {
        res.json(contact.toJSON())
            .catch(error => next(error))
    })
})

app.delete('/api/contacts/:id', (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(res.status(204).end())
        .catch(error => next(error))
})

app.post('/api/contacts', (req, res, next) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'missing information'
        })
    }
    Contact.find({ name: body.name }).then(result => {
        if (result.length) {
            return res.status(422).json({
                error: 'contact is already in the address book'
            })
        }
    })

    const contact = new Contact({
        name: body.name,
        number: body.number,
    })

    contact.save().then(savedContact => {
        res.json(savedContact.toJSON())
    }).catch(error => next(error))
})

app.put('/api/contacts/:id', (req, res, next) => {
    const body = req.body

    const contact = {
        name: body.name,
        number: body.number,
    }

    Contact.findByIdAndUpdate(req.params.id, contact, { new: true })
        .then(updatedContact => {
            res.json(updatedContact.toJSON())
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json(error.message)
    }
    next(error)
}

app.use(errorHandler)

const port = process.env.PORT || 3001
app.listen(port)