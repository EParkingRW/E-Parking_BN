import express from 'express';
import vehicleControllers from '../controllers/vehicleControllers';
const route = express();

route.post(
        '/create',
        vehicleControllers.savePlateText
      )
      .get("/",vehicleControllers.getAllSaveVehicles)

export default route;