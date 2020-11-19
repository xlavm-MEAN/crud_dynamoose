const express = require('express');
const userRoute = require('./routes/user.route.js');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use('/api/user', userRoute);

app.listen(3000, () => console.log('Connected and Running in Port: 3000'));