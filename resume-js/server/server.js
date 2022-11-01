const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users": ["userOne","userTwo", "userThree"]})
})

// run backend server on http://localhost:5000
app.listen(5000, ()=> console.log("started on http://localhost:5000"))