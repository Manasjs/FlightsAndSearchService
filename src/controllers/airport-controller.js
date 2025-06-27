const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async(req,res)=>{
 try {
    const response=await airportService.create(req.body)
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully created an airport",
            err:{}
        })
        
 } catch (error) {
    console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create airport",
            err:error
        })
 }
}

const destroy = async(req,res)=>{
    try {
        const response =await airportService.destroy(req.params.id)
        
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete airport",
            err:error
        }) 
    }
}

const get = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch airport",
            err:error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch airports",
            err:error
        }) 
    }
}

const update = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update airport",
            err:error
        })
    }
}

module.exports ={
    create
}