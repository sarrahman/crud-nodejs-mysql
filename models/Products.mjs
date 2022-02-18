import db from "../configs/Database.mjs";
import {Sequelize } from 'sequelize';

const DataTypes = Sequelize;

const Products = db.define('Products', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    harga: {
        type: DataTypes.DOUBLE,
        allowNull: true
    }
}, {
    freezeTableName: true,
})

export default Products;