const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/views');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, function() { 
    console.log(`Listening on PORT: ${PORT}`)
});