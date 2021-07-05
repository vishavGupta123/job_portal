'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log(models);
      this.belongsTo(models.Recruiter,{foreignKey:'recruiterId'});
      this.belongsToMany(models.Candidate,{through:'CandidateJobs',foreignKey:'jobId',as:'candidates'});
    }
  };
  Job.init({
    title: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    recruiterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};