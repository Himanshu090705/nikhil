const express = require('express');
const app = express();

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age");
    }
    else if(!req.query.age<12){
        res.send("Not valid age")
    }
    else{

        next();
    }
}
app.use(reqFilter)


app.get('/', (req, res) => {
    res.send("Welcome to this page");
});

app.get('/users', (req, res) => {
    res.send("Welcome to the users page");
});

app.listen(3200);

/*// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(2500, () => {
    console.log('Server is running on http://localhost:2500');
});
*/