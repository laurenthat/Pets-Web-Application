'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const catRouter = require('./routes/catRoute');
const userRouter = require('./routes/userRoute');
const passport = require('./utils/passport');

const port = 3000;

//serve uploaded files
app.use(express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));
app.use(cors());
// it's important to use the cors before the 2 requests. 
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRouter);
app.use('/user', passport.authenticate('jwt', {session: false}), userRouter);


// app.get('/user', (req, res) => {
//   res.send('From this endpoint you can get users.')
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
