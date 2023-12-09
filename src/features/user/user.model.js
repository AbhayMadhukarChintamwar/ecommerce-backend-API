export default class UserModel {
    constructor( name, email, password, type) {
        
            this.name = name,
            this.email = email,
            this.password = password,
            this.type = type
            
    }

    static SignUp(name, email, password, type) {
        const newUser = new UserModel(
           
            name,
            email,
            password,
            type
        );
        users.push(newUser);
        return newUser;
    }

    static SignIn(email, password) {
        const user = users.find((u) => u.email == email && u.password == password);
        return user;
    }
}

var users = [{
    "name": "user1",
    "email": "user@gmail.com",
    "password": "pass123",
    "type":"seller"


}];