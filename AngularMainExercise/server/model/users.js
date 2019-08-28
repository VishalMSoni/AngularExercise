const bcrypt = require('bcrypt');
const general = require('../utils/general');

class UsersModel extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            firstname: {
                type: DataTypes.STRING(20),
                allowNull: true,
                validate: {
                    max: 20
                }
            },
            lastname: {
                type: DataTypes.STRING(20),
                allowNull: true,
                validate: {
                    max: 20
                }
            },
            contact: {
                type: DataTypes.STRING(10),
                allowNull: true,
                validate: {
                    len: [10, 10]
                }
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: true,
                unique: true,
                validate: {
                    max: 50
                }
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            pincode: {
                type: DataTypes.STRING(10),
                allowNull: true,
                validate: {
                    len: [6, 6]
                }
            },
            birthdate: {
                type: DataTypes.DATE,
                allowNull: true,
            }
        }, {
                modelName: "users",
                sequelize
            });
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    async generateHash() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(text) {
        const match = await bcrypt.compare(text, this.password);
        if (match) {
            return true;
        }
        return false;
    }
}

module.exports = UsersModel;