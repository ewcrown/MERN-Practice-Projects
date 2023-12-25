import express from 'express'
import mongoDB from './db.js'
import createUser from './Routes/CreateUser.js';
import loginUser from './Routes/LoginUser.js';
import displayData from './Routes/DisplayData.js';

const app = express()
const port = 5000

mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', createUser);
app.use('/api', loginUser);
app.use('/api', displayData);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})