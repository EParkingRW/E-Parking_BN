import express from 'express';
import vehicleControllers from '../controllers/vehicleControllers';
const route = express();

route.post(
        '/entrance',
        vehicleControllers.savePlateText
      )
      .put(
        '/exit',
        vehicleControllers.exitPoint
      )
      .get("/",vehicleControllers.getAllSaveVehicles)

export default route;