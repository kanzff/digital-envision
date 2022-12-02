const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 3000
const { emailScheduler }= require('./functions/cron')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', routes)

// require('./functions/cron')();

app.listen(port, () => {
  emailScheduler()
  console.log('app listening on port ' + port)
})