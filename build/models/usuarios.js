"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const schemaVeterinarias = new mongoose_1.Schema({
    id: String,
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    vet: {
        address: String,
        departament: String,
        nameLocal: String,
        facebook: String,
        ownerVet: String,
        image: String,
        instagram: String,
        numMatricula: Number,
        propietario: String,
        province: String,
        services: [{ type: Object }],
        tel: Number,
        telWp: Number,
        tiktok: String,
        web: String
    }
});
schemaVeterinarias.methods.encriptado = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt();
    return bcryptjs_1.default.hash(password, salt);
});
schemaVeterinarias.methods.validacionEncriptado = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, this.password);
    });
};
exports.default = (0, mongoose_1.model)('Veterinaria', schemaVeterinarias);
//# sourceMappingURL=usuarios.js.map