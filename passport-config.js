const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByUsername, getUserById) {
    const authenticateUser = async (username, password, done) => {
        const user = await getUserByUsername(username)
        if (user == null) {
            return done(null, false, {message: "Invalid Username"})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: "Incorrect Password"})
            }
        } catch (err) {
            return done(err)
        }
    }

    passport.use(new localStrategy({ usernameField: 'username', passwordField: 'password'}, authenticateUser))
    passport.serializeUser( (user, done) => done(null, user.id))
    passport.deserializeUser( async (id, done) => done(null, await getUserById(id)))
}

module.exports = initialize