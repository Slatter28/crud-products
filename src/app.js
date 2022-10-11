const express = require('express');
const app = express();
const db = require('./utils/database')
const productsRouter = require('./products/products.router')
const initModels = require('./models/initModels')


app.use(express.json());

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB Sync Succesfully'))
    .catch((err) => console.log(err))

initModels();
app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK!' });
})

app.use('/products', productsRouter);

app.listen(8080, () => {
    console.log('server on');
})

