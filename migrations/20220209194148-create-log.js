'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDispositivo: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Dispositivos',
          key:'id'
        }
      },
      idQrCode: {
        type: Sequelize.INTEGER,
        references:{
          model: 'QrCodes',
          key:'id'
        }
      },
      verificado: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Logs');
  }
};