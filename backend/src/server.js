const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log(here)
    res.sendStatus(200)
})
app.listen(5000)