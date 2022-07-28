module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Construction',
    [
      {
        nomeObra: "casa 1",
        cidade: "São Paulo",
        rua: "Rua 01",
        numero: "Numero 01",
      },
      {
        nomeObra: "casa 2",
        cidade: "Volta Redonda",
        rua: "Rua 02",
        numero: "Numero 02",
      },
      {
        nomeObra: "casa 3",
        cidade: "Contagem",
        rua: "Rua 03",
        numero: "Numero 03",
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Construction', null, {}),
};