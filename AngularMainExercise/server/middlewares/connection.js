const userRepository = require('../features/user/userRepository');
const general = require('../utils/general');

class Connection {
    constructor(username = null, password = null) {
        this.username = username;
        this.password = password;
    }

    async validateUser(request) {
        try {
            let user = await userRepository.getUserByEmailId(this.username);
            
            if (user) {
                const match = this.password === user.dataValues.password;
                if (match) {
                    console.log('Valid user : ', this.username);
                    user.password = undefined;
                    user.isactive = undefined;
                    return user;
                }
            }
            return false;
        } catch (error) {
            console.log('Error occured while login : ', error);
            throw error;
        }
    }
}

module.exports = Connection;