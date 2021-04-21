module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      Role_No: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Role_Name: {
        type: Sequelize.STRING
      }
    });
  
    return Role;
  };