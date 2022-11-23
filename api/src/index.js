const express = require('express')
const cors = require('cors')

const app = express()

const routes = require('./routes/routes')

app.use(cors())
app.use(routes)

app.listen(8000)