"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaHistoriasClinicas = new mongoose_1.Schema({
    Vacunas: [{
            Certification: Number,
            DataVacuna: String,
            Vacuna: String,
            fecha: String,
            nameAndMatricule: String
        }],
    Registros: [{
            Info: String,
            Registro: String,
            fecha: String
        }],
    DataPet: {
        image: String,
        NombreMascota: String,
        Especie: String,
        Sexo: String,
        Nchip: Number,
        Pedigree: Number,
        Date: String,
        detalles: String
    },
    ownerPet: {
        NombreDueño: String,
        DNI: Number,
        Telefono: Number,
        Direccion: String,
        province: String,
        departament: String
    },
    id: Number
});
exports.default = (0, mongoose_1.model)('HistoriasClinicas', schemaHistoriasClinicas);
//# sourceMappingURL=modelHistory.js.map