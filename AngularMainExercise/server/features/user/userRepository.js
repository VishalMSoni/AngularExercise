const { users } = require('../../model/index');

class UserRepository {

    static async getUserByEmailId(emailId) {
        try {
            let result = await users.findOne({where:{ email: emailId }});
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async createUser(user) {
        try {
            let result = await users.build(user);
            console.log(result);
            // await result.generateHash();
            result.save();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async getAll() {
        try {
            let result = await users.findAll();
            console.log(result);
            return result;
        } catch (error) {
            console.log("----------" + error);
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            let result = await users.findOne({
                where: {
                    id: id
                }
            });
            console.log(result);
            return result;
        } catch (error) {
            console.log("----------" + error);
            throw error;
        }
    }

    static async updateUserById(userData) {
        try {
            let result = await users.update(userData, {
                where: {
                    email: userData.email
                }
            })
            console.log(result);
            return result;
        } catch (error) {
            console.log("----------" + error);
            throw error;
        }
    }

    static async deleteUserById(userId) {
        try {
            let result = await users.destroy({
                where: {
                    id: userId
                }
            })
            console.log(result);
            return result;
        } catch (error) {
            console.log("----------" + error);
            throw error;
        }
    }
}

module.exports = UserRepository;