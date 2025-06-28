const {FlightService}=require('../services/index');

const flightService = new FlightService();
 const create = async(req,res)=>{
     try {
        const flightRequestData ={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalId,
            departureTime:req.boy.departureTime

        }
        const flight =await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data:flight,
            success:true,
            merssage:"Successfully created a flight",
            err:{}
        })

     } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a Flight",
            err:error
        })
     }
 }

 const getAll = async(req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fethed the flights",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch the flights",
            err:error
        }) 
    }
 }

module.exports ={
 create,
 getAll
}





