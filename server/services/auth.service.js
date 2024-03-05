const { User } = require("../models/user")
const httpStatus = require("http-status")
const {ApiError} = require("../middleware/apiError")
const userService = require("./user.service")

//Creating User Service
const createUser = async (firstname, lastname ,email, password) => {
    try {
        if(await User.emailTaken(email)){
        throw new ApiError(httpStatus.BAD_REQUEST, "Sorry email taken");            
        }
        const user = new User({
            firstname,
            lastname,
            email,
            password
        });
        await user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
}

//token Service
const genauthService = async (user) =>{
    const token = user.generateAuthToken();
    return token;
}
//Sign in user with Email and Password
const signinUserWithEmailAndPassword = async (email, password) => {
    try {
        const user = await userService.findUserByEmail(email)
        if(!user){
            throw new ApiError(httpStatus.UNAUTHORIZED, "Email BAD REQUEST");            
        }
        if(!(await user.comparePassword(password))){
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Sorry BAD password');
        }
        
        return user;
    }
    catch (error) {
        throw error;
    }
}


module.exports = {
    createUser,
    genauthService,
    signinUserWithEmailAndPassword
}