"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificacion = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
dotenv_1.default.config();
function verificacion(req, res, next) {
    let { tokenLocal } = req.query;
    console.log(res);
    tokenLocal = tokenLocal === null || tokenLocal === void 0 ? void 0 : tokenLocal.toLocaleString();
    usuarios_1.default.findOne({ password: tokenLocal === null || tokenLocal === void 0 ? void 0 : tokenLocal.slice(1, -1) }).then(doc => {
        if ((doc === null || doc === void 0 ? void 0 : doc.password) != null && doc.password != undefined) {
            return next();
        }
        else {
        }
    })
        .catch(error => console.log(error));
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