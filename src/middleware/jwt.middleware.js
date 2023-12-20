import jwt from 'jsonwebtoken'
const jwtAuth = (req, res, next) => {
    //1.read the tocken

    const token = req.headers['authorization'];

    //2. no token , return the error
    if (!token) {
        return res.status(401).send("Unauthorized")
    }



    // 3. check if token is valid 
    try {
        const payload = jwt.verify(token, "abhychintamwar123");
        console.log(payload)

    } catch (error) {

        //4. return error.
        return res.status(401).send("Unauthorized")

    }

    //5. call next middleware
    next();

}


export default jwtAuth;