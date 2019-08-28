global.express = require('express');
global.mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const PORT = process.env.PORT;
global.app = express();

const corsOptions = {
    origin: ['http://localhost:4200'],
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions));

app.use(helmet());
app.use(helmet.noCache());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            secureProxy: app.SSL,
            secure: 'auto',
            maxAge: 1000 * 30000
        }
    })
);

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./router');
require('./middlewares/passport').initialize();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});