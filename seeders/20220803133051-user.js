module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Construction',
    [
      {
        displayName: "admin",
        email: "admin@admin.com.br",
        password: "passwordadmin",
      },
    ],
    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('Construction', null, {}),
};
