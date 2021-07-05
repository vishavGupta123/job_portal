const models = require('../models');

const Recruiter = models.Recruiter;
const Job = models.Job;

module.exports.create = function(req,res){
    console.log(req);
    Recruiter.create({
        contact_person:req.body.contact_person,
        company_name:req.body.company_name,
        email:req.body.email,
        password:req.body.password
    }).then((newRecruiter)=>{
        console.log(newRecruiter.get())
        return res.status(200).json(newRecruiter);
    }).catch((err)=>{
        console.log("Error while creating a recruiter");
    })
}


module.exports.findById = function(req,res){
    Recruiter.findOne({
        where:{id:req.params.id},
        include:'jobs'
    })
    .then((recruiter)=>{
        console.log(recruiter);
        return res.status(200).json(recruiter);
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports.login = function(req,res){
    console.log(req.body);
    Recruiter.findOne({
        where:{
            email:req.body.email,
            password:req.body.password},
        include:'jobs'
    })
    .then((recruiter)=>{
        console.log(recruiter);
        return res.status(200).json(recruiter);
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({
            message:'Internal server error'
        })
    })
}