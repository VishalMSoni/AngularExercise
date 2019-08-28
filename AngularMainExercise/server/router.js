const user = require('./features/user/userApi');

require('./utils/auth');

app.all('*', (request, response, next) => {
    console.log('+++++++++++' + request.isAuthenticated());
    if (request.isAuthenticated()) {
        console.log(request.user);
        next();
    } else {
        response.status(404).json({ message: 'Unauthorized request' });
    }
});

app.use('/user', user);

require('./utils/error');