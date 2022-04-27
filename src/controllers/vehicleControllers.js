import VehicleService from "../services/vehicleServices";
import Response from '../helpers/Response';
import cloudinari from "../utilities/cloudinaryUploader";

export default class vehicleControllers{
    static async savePlateText(req,res){
        const plateText = req.body.plateText;
        const file = req.files.photo;
        try {
            const imageUrl = await cloudinari.uploadPhoto(req,res,file);
          //res.send({file:imageUrl.secure_url})
            VehicleService.create({plateText,imageUrl:imageUrl.secure_url}).then((resp)=>{
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
}