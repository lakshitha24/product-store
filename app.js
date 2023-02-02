require('dotenv').config()
const connectDB = require('./db/connection');
const productRoute = require('./routes/product');

const express = require('express')
const app = express();

const notFound = require('./middeleware/not-found');
const errorHandlerMiddleware = require('./middeleware/error-handler');

//middeleware

app.use(express.json())

//rootes

app.get('/',(req,res)=>{
    res.send('<h1>store API</h1><a href="/api/v1/products">products route</a>')
});

app.use('/api/vi/products',productRoute)
// prodcuts route

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}!`));
    } catch (err) {
        console.log(err)
    }
}
start();


