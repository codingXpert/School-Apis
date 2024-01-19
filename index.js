require('dotenv/config');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./config/sqlConnection');

//middlewares
app.use(express.json());
app.use('/api', require('./routes'));

app.listen(PORT, (err) => {
    if(err) {
        console.log("Error:", err.message);
    }else {
        console.log(`Server is running on port ${PORT}`);
    }
});