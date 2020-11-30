const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history({
    verbose: true
}))
app.use(express.static('./dist'))

app.listen(8080, () => {
    console.log('Server staring at port 8080')
})