const{ CityRepository }=require('../repository/index');
const cityRepository = new CityRepository();

class CityService {
    constructor(){
        this.CityRepository=new CityRepository();
    }
    async createCity(data){
        try {
            const city=await this.CityRepository.createCity(data)
            return city;
        } catch (error) {
            console.log("somthing goes wrong in service layer")
            throw{error};
        }
    }
    async deleteCity(cityId){
       try {
           const response=await this.CityRepository.deleteCity(cityId)
           return response;
       } catch (error) {
          console.log("somthing goes wrong in service layer")
          throw{error};
       }
    }
    async updateCity(cityId,data){
        try {
            const city=await this.CityRepository.updateCity(cityId,data)
            return city;
        } catch (error) {
            console.log("somthing goes wrong in service layer")
            throw{error};
        }
    }
    async getCity(cityId){
        try {
            const city=await this.CityRepository.getCity(cityId)
            return city;
        } catch (error) {
            console.log("somthing goes wrong in service layer")
            throw{error};
        }
    }
    async getAllcities(filter){
        try {
          const cities = await this.CityRepository.getAllcities({name:filter.name})  
          return cities;
        } catch (error) {
          console.log("Somthing went wrong in service layer")  
          throw{error};
        }
    }
    async addMultipleCities(cityList){
        try {
          if(!Array.isArray(cityList)||cityList.length===0){
            throw {
                message:'Input must be non-empty array',
                statusCode:400
            };
            
          }  
          const result= await cityRepository.bulkCreateCities(cityList);
            return result;
        } catch (error) {
           console.log('Somthing went wrong in service layer');
           throw error;
        }
    }
}

module.exports=CityService;