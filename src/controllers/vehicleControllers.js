import VehicleService from "../services/vehicleServices";
import Response from '../helpers/Response';
import cloudinari from "../utilities/cloudinaryUploader";
import io from './../index'
export default class vehicleControllers{
    static async savePlateText(req,res){
        const plateText = req.body.plateText;
        const file = req.files.photo;
        try {
            const imageUrl = await cloudinari.uploadPhoto(req,res,file);

            VehicleService.create({plateText,imageUrl:imageUrl.secure_url}).then((resp)=>{
                io.sockets.emit("data",{data:resp})
                return Response.success(res,201,{
                    message:"Vehicle saved successfuly",
                    data:resp
                })
            }).catch((err)=>{
                return Response.error(res,401,{message:"fails to save This vehicle",error:err.message})
            })
        } catch (error) {
            return Response.error(res,500,{message:"server error",error:error.message})
        }
    }

    static async exitPoint(req,res){
        const plateText = req.body.plateText;
        try {
            await VehicleService.findvehicleByPlateNumber(plateText).then((resp)=>{
                var data = resp[0]
                // console.log("first:",resp)
                let id = data.dataValues.id
                
                VehicleService.updateAtExit(id).then((result)=>{
                    io.sockets.emit("exit",{data:result[1].dataValues})
                    return Response.success(res,201,{
                        message:"Vehicle found successfuly",
                        data:result[1].dataValues
                    })
                }).catch((err)=>{
                    return Response.error(res,402,{message:"fails to update This vehicle at exit",error:err.message})
                })
            }).catch((err)=>{
                return Response.error(res,403,{message:"This vehicle is not in parking",error:err.message})
            })
        } catch (error) {
            return Response.error(res,500,{message:"server error",error:error.message})
        }
    }

    static async getAllSaveVehicles(req,res){
        try {
            await VehicleService.getAllVihecles().then((resp)=>{
                return Response.success(res,201,{
                    message:"Vehicles retreived successfuly",
                    data:resp
                })
            }).catch((err)=>{
                return Response.error(res,401,{message:"fails to retreive all vehicles",error:err.message})
            })
        } catch (error) {
            return Response.error(res,500,{message:"server error",error:error.message})
        }
    }

    static async getVehiclesByDateRange(req,res){
        const toTimeStamp = (strDate) => { 
            const dt = Date.parse(strDate); 
            return dt; 
           }
        try {
            const { startingDate, endingDate} = req.body
            await VehicleService.findvehiclesByDateRange(toTimeStamp(startingDate),toTimeStamp(endingDate)).then((resp)=>{
                return Response.success(res,201,{
                    message:"Vehicles retreived successfuly",
                    data:resp
                })
            }).catch((error)=>{
                return Response.error(res,403,{message:"Failed to retreive vehicles",erraor:error.message})
            })
        } catch (error) {
            return Response.error(res,500,{message:"server error",error:error.message})
        }
    }
}