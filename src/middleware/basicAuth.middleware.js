import UserModel from "../features/user/user.model.js";
const basicAuthorizer = (req, res, next) => {
    //1 check if authorization header is empty.

    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(400).send("No authorization details are found");
    }
    console.log(authHeader)

    //2. Extract the credentials.

    const base64credentials = authHeader.replace('Basic', '');

    console.log(base64credentials)


    //3decode credentials

    const decodedCreds = Buffer.from(base64credentials, 'base64').toString('utf-8')

    console.log(decodedCreds);

    const creds = decodedCreds.split(':');


    const user = UserModel.getAll().find(u => u.email == creds[0] && u.password == creds[1]);
    if (user) {
        next();
    }
    else {
        return res.status(401).send("Incorrect Credentials");
    }


}

export default basicAuthorizer;