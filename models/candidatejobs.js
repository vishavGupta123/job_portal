'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CandidateJobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Candidate,{foreignKey:'candidateId'})
      this.belongsTo(models.Job,{foreignKey:'jobId'})
    }
  };
  CandidateJobs.init({
    candidateId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CandidateJobs',
  });
  console.log(CandidateJobs);
  return CandidateJobs;
};