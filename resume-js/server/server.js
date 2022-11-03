const express = require('express')
const app = express()
//Adding template engine express-react-views
app.use("/../src/assets", express.static(__dirname + "assets")); 
app.set('views', __dirname + '/../src/');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.render('App')
  })

app.get('/about', (req, res) => {
  res.render('About')
})

app.get("/api", (req,res) => {
    //testing using API call
    res.json({"users": ["userOne","userTwo", "userThree"]})
})

// run backend server on http://localhost:5000
app.listen(5000, ()=> console.log("started on http://localhost:5000"))