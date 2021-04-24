const express = require('express'),
app = express(),
passport = require('passport'),
port = process.env.PORT || 80,
cors = require('cors'),
cookie = require('cookie')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users

require('./passport.js')

const router = require('express').Router(),
jwt = require('jsonwebtoken')

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// router.use(cors())
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

let animas = {
    list: [
        { id: 1, name: 'ONE PIECE', style: 'ผจญภัย, แฟนตาซี, ต่อสู้ ',like: 0 ,reviews:"Good animas see many time", score:9,imageurl:"https://i.pinimg.com/474x/0e/c8/4b/0ec84b0d13ef5b3dfe7d10b3bfee9a05.jpg" },
        { id: 2, name: 'Black Clover', style: 'จินตนิมิต, แอ็กชัน, ผจญภัย',like: 0 ,reviews:"So good ", score:8,imageurl:"https://www.anime-os.com/image/2020/09/Black-Clover-Cover.jpg.webp" },
    ]
}



router.post('/login', (req, res, next) => {
passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('Login: ', req.body, user, err, info)
    if (err) return next(err)
    if (user) {
        const token = jwt.sign(user, db.SECRET, {
            expiresIn: '1d'
        })
        // req.cookie.token = token
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
        );
        res.statusCode = 200
        return res.json({ user, token })
    } else
        return res.status(422).json(info)
})(req, res, next)
})

router.get('/logout', (req, res) => {
res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: -1,
        sameSite: "strict",
        path: "/",
    })
);
res.statusCode = 200
return res.json({ message: 'Logout successful' })
})

/* GET user profile. */
router.get('/profile',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send(req.user)
});

router.get('/foo',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send('foo')
});

router.post('/register',
async (req, res) => {
    try {
        const SALT_ROUND = 10
        const { username, email, password } = req.body
        if (!username || !email || !password)
            return res.json({ message: "Cannot register with empty string" })
        if (db.checkExistingUser(username) !== db.NOT_FOUND)
            return res.json({ message: "Duplicated user" })

        let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
        hash = await bcrypt.hash(password, SALT_ROUND)
        users.users.push({ id, username, password: hash, email })
        res.status(200).json({ message: "Register success" })
    } catch {
        res.status(422).json({ message: "Cannot register" })
    }
})

router.get('/alluser', (req, res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
res.send('Respond without authentication');
});



router.route('/animas')
    .get((req, res) => res.json(animas.list))
    .post((req, res) => { //แก้ไข อัตเดตข้อมูล
        console.log(req.body)
        let newanimas = {}
        newanimas.id = (animas.list.length) ? animas.list[animas.list.length - 1].id + 1 : 1
        newanimas.name = req.body.name
        newanimas.style = req.body.style
        newanimas.like = req.body.like
        newanimas.reviews = req.body.reviews
        newanimas.score = req.body.score
        newanimas.imageurl = req.body.imageurl
        animas = { "list": [...animas.list, newanimas] }
        res.json(animas.list)
    })

router.route('/animas/:ani_id')
    .get((req, res) => {  //แสดงข้อมูล
        const ani_id = req.params.ani_id
        const id = animas.list.findIndex(item => +item.id === +ani_id)
        res.json(animas.list[id])
    })
    .put((req, res) => { //แก้ไข อัตเดต
        const ani_id = req.params.ani_id
        const id = animas.list.findIndex(item => +item.id === +ani_id)
        animas.list[id].id = req.body.id
        animas.list[id].name = req.body.name
        animas.list[id].style = req.body.style
        animas.list[id].like = req.body.like
        animas.list[id].reviews = req.body.reviews 
        animas.list[id].like = req.body.score
        animas.list[id].imageurl = req.body.imageurl
        res.json(animas.list)
    })
    .delete((req, res) => { // ลบ
        const ani_id = req.params.ani_id
        animas.list = animas.list.filter(item => +item.id !== +ani_id)
        res.json(animas.list)
    })



router.route('/purchase/:ani_id')
    .put((req,res)=> {
        const ani_id = req.params.ani_id
        const id = animas.list.findIndex(item => +item.id === +ani_id)
        animas.list[id].like = 1
        res.json(animas.list)
    })



router.route('/like/:animas_id')
.put((req, res) => {
    const animas_id = req.params.animas_id
    const id = animas.list.findIndex(item => +item.id === +animas_id)
    animas.list[id].like = req.body.id
   
    res.json(animas.list)

   
})


// router.route('/like/:animas_id')
// .put((req, res) => {
//     const animas_id = req.params.animas_id
//     const id = animas.list.findIndex(item => +item.id === +animas_id)
//     animas.list[id].like = 1
//     res.json(animas.list)

   
// })

router.route('/dislike/:animas_id')
.put((req, res) => {
    const animas_id = req.params.animas_id
    const id = animas.list.findIndex(item => +item.id === +animas_id)
    animas.list[id].like = 0
    res.json(animas.list)

   
 })

   


// Error Handler
app.use((err, req, res, next) => {
let statusCode = err.status || 500
res.status(statusCode);
res.json({
    error: {
        status: statusCode,
        message: err.message,
    }
});
});



// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

