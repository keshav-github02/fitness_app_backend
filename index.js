const app = require('./app');
const port = process.env.PORT || 3000;

const db= require('./db/db');

app.get('/',(req,res)=>{
    res.send('Welcome to the backend of the fitness app!');
});

app.listen(port, () => {
    console.log("Server is running on port http://localhost:" + port);
});
