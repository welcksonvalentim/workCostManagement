module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'User',
    [
      {
        displayName: "admin",
        email: "admin@admin.com.br",
        password: "passwordadmin",
      },
    ],
    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('User', null, {}),
};
