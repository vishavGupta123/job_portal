'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Job,{through:'CandidateJobs',foreignKey:'candidateId',as:'jobs'});
    }
  };
  Candidate.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    college: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};