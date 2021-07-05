const models = require('../models');

const Candidate = models.Candidate;
const Job = models.Job;

module.exports.create = function(req,res){
    Candidate.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        college:req.body.college
    }).then((newCandidate)=>{
        console.log(newCandidate.get());
        return res.status(
            200
        ).json(newCandidate);
    }).catch((err)=>{
        return res.status(500).json(err);
    })
}


module.exports.applyForJob = function(req,res){
    console.log(req.params);
    let candidateId = req.params.id;
    let jobId = req.params.jobId;
    Candidate.findOne({
        where:{id:candidateId}
    }).then((candidate)=>{
        console.log(candidate);
        Job.findOne({
            where:{id:jobId}
        }).then((job)=>{
            console.log(job.get());
            candidate.addJob(job)
            .then((newCandidate)=>{
                console.log(newCandidate);
                return res.status(200).json(newCandidate);
            })

        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports.login = function(req,res){
    Candidate.findOne({
        where:{email:req.body.email,password:req.body.password},
        include:'jobs'
    }).then((candidate)=>{
        console.log(candidate);
        return res.status(200).json(candidate);
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({
            message:'Internal server error'
        })
    })
}

module.exports.findById = function(req,res){
    console.log(req.params);
    Candidate.findByPk(req.params.id,{include:['jobs']})
    .then((candidate)=>{
        return res.status(200).json(candidate);
    }).catch((err)=>{
        return res.status(500).json(err);
    })
}