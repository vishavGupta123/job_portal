const models = require('../models');
const Job = models.Job;
const Recruiter = models.Recruiter;


module.exports.createJob = function(req,res){
    let recruiterId = req.params.id;
    Job.create(
        {title:req.body.title,experience:req.body.experience,recruiterId:recruiterId}
    ).then((newJobs)=>{
        console.log(newJobs);
        return res.status(200).json(newJobs);
    }).catch((err)=>{
        console.log(err);
        console.log("Error while creating new jobs");
    })
}


module.exports.findByTitle = function(req,res){
    console.log(req.query);
    let jobTitle = req.query.job_title;
    console.log(jobTitle);
    Job.findAll({
        where: {title: jobTitle},include:[Recruiter,'candidates']
    }).then((foundJob)=>{
        console.log(foundJob);
        return res.status(200).json(foundJob);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports.allJobs = function(req,res){
    Job.findAll({}).then((jobs)=>{
        console.log(jobs);
        return res.status(200).json(jobs);
    }).catch((err)=>{
        return res.status(500).json({
            message:'Internal server error'
        })
    })
}

module.exports.getJobById = function(req,res){
    Job.findByPk(req.params.id,{include:['candidates']})
    .then((jobs)=>{
        return res.status(200).json(jobs);
    }).catch((err)=>{
        return res.status(500).json(err);
    })
}