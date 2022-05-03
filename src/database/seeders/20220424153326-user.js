'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "tblUsers",
      [
        {
          name: "NKUBITO Emmanuel",
          email: "admin@future.rw",
          password:
            "$2b$12$89zO5H8EZ0diXju0ZMZXcejpBZMHtfwjC/2oEm9HQU8H99L1/CoWq",
          phoneNumber:'0787311654'
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete("tblUsers", null, {}),
};

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('Users', [{
//         // name: "NKUBITO Emmanuel",
//         // email: "emmanuelnkubito2@gmail.com",
//         // phoneNumber:'0787311654',
//         // password:"$2b$12$89zO5H8EZ0diXju0ZMZXcejpBZMHtfwjC/2oEm9HQU8H99L1/CoWq",
//      }], {});
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
