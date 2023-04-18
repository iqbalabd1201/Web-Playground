const userRouter = require('express').Router();
const { loadUser, addUser } = require('../utils/users');

userRouter.get('/', (req, res) => {
    res.render('src2');
});



userRouter.get('/games', (req, res) => {
    res.render('index');
});

userRouter.get('/users', (req, res) => {
    const data = loadUser();
    res.send(data);
})



userRouter.post('/signup', (req, res) => {
    addUser(req.body);
    let email = req.body.email
    let password = req.body.password
    console.log(`new user signed up with email ${email} and password ${password}`,)
    res.redirect('/');
});


userRouter.post('/signup', (req, res) => {
    addUser(req.body);
    let email = req.body.email
    let password = req.body.password
    console.log(`new user signed up with email ${email} and password ${password}`,)
    res.redirect('/');
});


userRouter.post('/login', (req, res,next) => {

    let user = loadUser();
    users = user.map(function (value) {
        if (value.email === req.body.email && value.password === req.body.password) {
            return res.redirect("/games")
        }
        next();
        })
        }
    )

userRouter.get('*', function (req, res) {
    res.status(404).json({
        status: false,
        data: '404 page not found'
    })
});


module.exports = userRouter;