const { authServices } = require('../services')

const authController = {
    async register(req, res, next) {
        try {

            const { firstname,lastname, email, password } = req.body;
            const user = await authServices.createUser(firstname, lastname, email, password)
            const token = await authServices.genauthService(user)

            res.cookie("x-access-token", token).status(200).send({
                user,
                token
            })
        }
        catch (error) {
            next(error)
        }

    },

    async signin(req, res, next) {
        try {
            const {email,password} = req.body
            const user = await authServices.signinUserWithEmailAndPassword(email, password)
            const token = await authServices.genauthService(user)

            res.cookie("x-access-token", token).status(200).send({
                user,
                token
            })
        }
        catch (error) {
            next(error)
        }

    },

    async isauth(req, res, next) {
        res.json(req.user)

    }
}

module.exports = authController;