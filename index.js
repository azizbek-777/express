const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        id: 1,
        first_name: "Turdibek",
        age: 20,
    })
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})