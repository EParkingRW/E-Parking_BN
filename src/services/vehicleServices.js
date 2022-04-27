import {Vehicle} from './../database/models'

export default class VehicleService{
     /**
   * Create Object
   * @param {String} data String data
   * @returns Created String
   */
  static create(data) {
    return Vehicle.create(data);
  }
     /**
   * retreiving saved Vehicles
   * @returns retreived Object
   */
      static getAllVihecles() {
        return Vehicle.findAll();
      }
}