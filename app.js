const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Expense = require('./models/expense');
const sequelize = require('./util/database');
const routes = require('./routes/expense');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(routes); 




sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>console.log(err));