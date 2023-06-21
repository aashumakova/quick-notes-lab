const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function checkToken(req, res) {
    console.groupCollapsed('req.user', req.user);
    res.json(req.exp);
    
}

async function create(req, res) {
    // baby steps 
    // res.json({
    //     user: {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // })

    try {
        const user = await User.create(req.body)

        const token = createJWT(user);
        console.log('this is the token in signup', token)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

// to login a user
async function login(req, res) {
    try {
        // find the user i nthe db
        const user = await User.findOne({ email: req.body.email })
        //throw an error if not found
        if (!user) throw new Error()
        //compare the password using the bcrypt
        const match = await bcrypt.compare(req.body.password, user.password)
        //log them in if there is a match (create the token)
        if (match) {
            const token = createJWT(user)
            res.json(token)
        } else {
            throw new Error()
        }
        // thow an erro if there is not match
    } catch {
        res.status(400).json('Bad credentials')
    }
}

// // // Helper functions // // //

// this is called whenever we need to create a web token
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    )
}

// // // // // // // // // // // //
module.exports = {
    create,
    login,
    checkToken
}