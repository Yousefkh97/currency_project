const express = require('express') // back end web application framework for Node.js
const app = express()
app.use(express.static('public')) // serve static files
const port = 4000;
app.listen(port, () => {
  console.log(`FrontEnd service listening at http://localhost:${port}`)
})  