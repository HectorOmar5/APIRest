const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ValorSchema = new Schema({
    temperatura: String,
    humedad: String,
    fecha: Date,
    descripcion: String
});

module.exports = mongoose.model('Datos', ValorSchema);
