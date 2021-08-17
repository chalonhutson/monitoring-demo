const express = require("express");

const app = express();

const path = require("path");


const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'e4fd9bf3d74445b686dab0f0c761a984',
  captureUncaught: true,
  captureUnhandledRejections: true,
})





app.use(express.json());

app.get("/", (req, res) => {
    rollbar.log('Hellors world!')
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

const port = process.env.PORT || 4040;


app.listen(port, () => {
    rollbar.log(`Server running port ${port}.`)
    console.log(`Up and running port ${port}.`)
});