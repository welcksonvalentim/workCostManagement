const Construction = (sequelize, DataTypes) => {
  const Construction = sequelize.define('Construction', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
      },
      nomeObra: DataTypes.STRING,
      cidade: DataTypes.STRING,
      rua: DataTypes.DATE,
      numero: DataTypes.STRING,
  }, { 
      freezeTableName: true,
      timestamps: false
  })
  return Construction
}

module.exports = Construction;