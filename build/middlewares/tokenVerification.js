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
exports.verificacion = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
dotenv_1.default.config();
function verificacion(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { tokenLocal } = req.query;
            const token = tokenLocal === null || tokenLocal === void 0 ? void 0 : tokenLocal.toString(); // Convertir el token a una cadena
            if (token) {
                const doc = yield usuarios_1.default.findOne({ password: token.slice(1, -1) }).exec();
                if (doc === null || doc === void 0 ? void 0 : doc.password) {
                    return next();
                }
            }
            // Si no se cumple la verificación, puedes enviar una respuesta de error o redirigir a otra ruta
            res.status(401).json({ error: 'Acceso no autorizado' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error en el servidor' });
        }
    });
}
exports.verificacion = verificacion;
// console.log(mongoose.Types.ObjectId.isValid(objectId))
// console.log(objectId)
// const authTokenRecibido = req.header('autorizationToken');
// if (!authTokenRecibido) {
//   return res.status(401).send('Acceso denegado');
// }
// const payload = jwt.verify(
//   authTokenRecibido,
//   process.env.TOKEN_SECRET as string
// ) as JwtPayload;
// req.userId = payload._id;
// console.log('esta bien el token');
//# sourceMappingURL=tokenVerification.js.map