

const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// this is my route
app.get("/", (req, res, next) => {
    res.render("index")
});

app.listen(3000, () => {
    console.log("server is runnig on port 3000");
    
 
})

