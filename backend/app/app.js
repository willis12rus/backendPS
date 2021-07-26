const express = require('express')
const PGTURouter = require('../routes/PGTU.routes')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use('/api', PGTURouter)

app.listen(PORT, () => console.log(`server starts on port ${PORT}`))