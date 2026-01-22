const express = require('express');
const app = express();
const auth = require('./routes/auth');
require('./conn/conn');
const list = require('./routes/list');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('hi');
});

app.use('/api/auth', auth);
app.use('/api/list', list);  


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});