module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        U_Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        U_Firstname: {
            type: Sequelize.STRING
        },
        U_Lastname: {
            type: Sequelize.STRING
        },
        U_Username: {
            type: Sequelize.STRING
        },
        U_Id_Role: {
            type: Sequelize.INTEGER
        },
        U_Password: {
            type: Sequelize.STRING
        }
    });
  
    return User;
  };