const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID, // para generar un id aleatorio unico.
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hardSkills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    softSkills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    projects: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
});
}
