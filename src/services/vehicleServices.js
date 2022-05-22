import {Vehicle} from './../database/models'
const { Op } = require("sequelize");

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
   * Create Object
   * @param {String} condition String condition
   * @returns Created String
   */
      static updateAtExit(id) {
        return Vehicle.update({ exitedAt: new Date() , isInside: false},
            { 
              where: { id },
              returning: true,
              plain: true
            }
        );
      }
     /**
   * retreiving saved Vehicles
   * @returns retreived Object
   */
      static getAllVihecles() {
        return Vehicle.findAll();
      }
      /**
   * Find vehicle by plateNumber or Vehiclename
   * @param {string} email
   * @returns Vehicle that matches email or Vehiclename
   */
  static findvehicleByPlateNumber(plateText) {
    return Vehicle.findAll({
      limit: 1,
      where: {
        plateText,
        isInside:true
      },
      order: [ [ 'createdAt', 'DESC' ]]
    })
  }

    /**
     * Find vehicle by plateNumber or Vehiclename
     * @param {string} startDate
     * @param {string} endDate
     * @returns Vehicle that matches email or Vehiclename
     */
    static findvehiclesByDateRange(startDate,endDate){
      return Vehicle.findAll({
        where:{
          createdAt:{
            [Op.between]: [startDate, endDate], 
          },
        }
      })
    }

  /**
   * Find Vehicle by id
   * @param {Number} id Vehicle ID
   * @returns Vehicle
   */
  static findByPk(id) {
    return Vehicle.findByPk(id);
  }
/**
   * Find Vehicle by given condition
   * @param {Object} condition Condition to follow ex: { where: {email: 'john@example.com' }}
   * @returns Vehicle that matches the condition
   */
 static findWhere(condition) {
  return Vehicle.findOne({
    where: { plateText:condition },
    order: [ [ 'createdAt', 'DESC' ]]});
}


}