require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const authrouter = require('./routes/farmer')
const cors = require("cors");

connectDB();
app.use(cors());
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

app.use("/api", authrouter);



const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
