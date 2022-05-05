const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, INTEGER } = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const owners = sequelizeClient.define('owners', {
    id: {
      type: UUID,
      default: UUIDV4(),
      primaryKey: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    openness_index: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }
    },
    conscientiousness_index: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }
    },
    extraversion_index: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }
    },
    agreeableness_index: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }
    },
    neuroticism_index: {
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
  owners.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return owners;
};

