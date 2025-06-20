const { CityService }=require('../services/index');

const cityService=new CityService();


const create = async (req,res)=>{
    try {
        const city=await cityService.createCity(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create city",
            err:error
        })
        
    }

}
//DELETE->/city/:id
const destroy =async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete city",
            err:error
        })
        
    }

}
//PATCH->/city/:id
const update =async (req,res)=>{
    try {
        const response=await cityService.updateCity(req.params.id,req.body)
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully updated a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update the city",
            err:error
        })
    }

}
//GET->/city/:id
const get =async(req,res)=>{
    try {
        const response=await cityService.getCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully fetch a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch the city",
            err:error
        })
    }

}

const getAll=async(req,res)=>{
    try {
        //console.log(req.params)
        const cities = await cityService.getAllcities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:"successfully fetched all cities",
            err:{}
        });
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch the cities",
            err:error
        })
    } 
}


module.exports={
    create,
    destroy,
    update,
    get,
    getAll

}
