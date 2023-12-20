import UserModel from "./user.model.js"
import jwt from 'jsonwebtoken';
export default class UserController {

    signUp(req, res) {

        const { name, email, password, type } = req.body;

        const user = UserModel.SignUp(name, email, password, type);
        res.status(201).send(user)
    } 
    signIn(req, res) {
        const user = UserModel.SignIn(req.body.email, req.body.password);

        if (!user) {

            return res.status(400).send("User not found");

        } else {
            //1. create token
            const token = jwt.sign({userID: user.id, email: user.email}, "abhychintamwar123",{
                expiresIn:'1h'
            })

            //2. send token

            return res.status(200).send(token)

        }
    }
};
