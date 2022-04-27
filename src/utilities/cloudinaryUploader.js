import express from 'express'
import Response from '../helpers/Response';
import { v4 as uuidv4 } from 'uuid';
var cloudinary = require('cloudinary').v2;


const app = express();

cloudinary.config({
    cloud_name: "http-voicetoworld-netlify-app",
    api_key: "958152517412848",
    api_secret: "h2eAzwp1zYxSKXe6lqHka-kopSQ",
  });

  export default class cloudinari {
    static async uploadPhoto(req, res,file) {
        try {
          const results = await cloudinary.uploader.upload(
            file.tempFilePath,
            {
              public_id: "projects/smartparking/" + uuidv4()+'_'+Date.now()/1000,
              overwrite: true,
            }
          );
           
        return results
        } catch (error) {
            return Response.error(res,403,{message:"Fail to save image on cloudinary", error:error.message})
        }
      }
  }