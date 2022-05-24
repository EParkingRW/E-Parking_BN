'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "tblRole",
      [
        {
          id:'b4462e58-8b81-4edd-8519-e247a1f7cca7',
          title: "admin",
          aboutRole: "SomeOne Whose access to whole project"
        },
        {
          id:"77b29bbb-a3da-44c9-b376-d7cf07088aad",
          title: "manager",
          aboutRole: "SomeOne Whose access to the campany parking spaces"
        },
        {
          id:'fe2900d3-cd33-4a5f-abda-1b0cd1a91c57',
          title: "normal",
          aboutRole: "SomeOne Whose access to Parking space"
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete("tblRole", null, {}),
};