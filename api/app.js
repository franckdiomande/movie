const express = require('express');
const BodyParser = require('body-parser');
const CorsMiddleware = require('cors');
const SecurityMiddleware = require('./middlewares/security');
const UserRouter = require('./routers/user');
const SecurityRouter = require('./routers/security');
const MovieRouter = require('./routers/movie');

// Init app
const app = express();
app.use(CorsMiddleware());
app.use(BodyParser.json());
app.use(SecurityMiddleware);
app.use('/', UserRouter);
app.use('/', SecurityRouter);
app.use('/movies', MovieRouter);

app.listen(80, () => {
    console.log('Listening');
});


