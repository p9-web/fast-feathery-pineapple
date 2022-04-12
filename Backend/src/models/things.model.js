const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, INTEGER } = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const things = sequelizeClient.define('things', {
    id: {
      type: UUID,
      default: UUIDV4(),
      primaryKey: true,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    happiness_index: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  things.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return things;
};
