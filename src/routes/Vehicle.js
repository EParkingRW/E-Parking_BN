import express from 'express';
import vehicleControllers from '../controllers/vehicleControllers';
import vehicleValidator from '../validation/vehicleValidation';
const route = express();

route.post(
        '/entrance',
        vehicleValidator.entrance,
        vehicleControllers.savePlateText
      )
      .get("/",vehicleControllers.getAllSaveVehicles)
      .post('/range',vehicleControllers.getVehiclesByDateRange)

export default route;