'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "tblUsers",
      [
        {
          name: "NKUBITO Emmanuel",
          email: "admin@parking.rw",
          password:
            "$2a$12$Vc.fLIFx/0qfWlCpe08qgO.rA54RKMb/Yuq7M3E0wDiJ6E2elBwOS",
          phoneNumber:'0787311654',
          roleId:"b4462e58-8b81-4edd-8519-e247a1f7cca7"
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
