import VehicleService from "../services/vehicleServices";
import Response from '../helpers/Response';
import cloudinari from "../utilities/cloudinaryUploader";
import io from './../index'
export default class vehicleControllers{
    static async savePlateText(req,res){
        const plateText = req.body.plateText;
        const file = req.files.photo;
        let imageUrl;
        try {
            const vehicle = await VehicleService.findWhere(plateText)
            if(vehicle){
                // console.log("this vehicle is already in system", vehicle.dataValues);
                imageUrl = vehicle.imageUrl;
                if(vehicle.isInside === true){
                    console.log("this car is inside , is ready to go out")
                    const id = vehicle.id;
                    VehicleService.updateAtExit(id).then(async(result)=>{
                        return await VehicleService.findByPk(id).then((resp)=>{
                            io.sockets.emit("exit",{data:resp.dataValues})
                            return Response.success(res,201,{
                                message:"Vehicle Exit successfuly",
                                data:resp
                            })
                        }).catch((error)=>{
                            return Response.error(res,403,{
                                message:"failure to retreive exit car",
                                error:error.message
                            })
                        })
                    }).catch((err)=>{
                        return Response.error(res,402,{message:"fails to update This vehicle at exit",error:err.message})
                    })
                }
                else{
                    // console.log("this car is in system but return to park again")
                    await VehicleService.create({plateText,imageUrl}).then((resp)=>{
                        io.sockets.emit("data",{data:resp})
                        return Response.success(res,201,{
                            message:"Welcome Again To Park Here",
                            data:resp
                        })
                    }).catch((err)=>{
                        return Response.error(res,401,{message:"fails to save This vehicle",error:err.message})
                    })
                }
            }
            else{
                // console.log("this car is new to our system")
                imageUrl = await cloudinari.uploadPhoto(req,res,file);
                await VehicleService.create({plateText,imageUrl:imageUrl.secure_url}).then((resp)=>{
                    io.sockets.emit("data",{data:resp})
                    return Response.success(res,201,{
                        message:"Vehicle saved successfuly",
                        data:resp
                    })
                }).catch((err)=>{
                    return Response.error(res,401,{message:"fails to save This vehicle",error:err.message})
                })
            }

            
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