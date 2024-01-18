const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;



app.listen(PORT, (err) => {
    if(err) {
        console.log("Error:", err.message);
    }else {
        console.log(`Server is running on port ${PORT}`);
    }
});