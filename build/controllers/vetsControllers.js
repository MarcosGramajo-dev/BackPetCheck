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
exports.GetAll = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
function GetAll(res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doc = usuarios_1.default.find({})
                .exec().then(doc => {
                console.log(doc);
                res.json(doc);
            });
            //la promesa me queda pendiente, no se resuelve
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error: 'No se pudo obtener datos' });
        }
    });
}
exports.GetAll = GetAll;
//# sourceMappingURL=vetsControllers.js.map