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
exports.findHC = exports.newHistory = void 0;
const modelHistory_1 = __importDefault(require("../models/modelHistory"));
function newHistory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hc = new modelHistory_1.default({
                Vacunas: req.body.Vacunas,
                Registros: req.body.Registros,
                DataPet: req.body.DataPet,
                ownerPet: req.body.ownerPet,
                id: req.body.id
            });
            const validationID = yield modelHistory_1.default.findOne({ id: hc.id }).then(doc => {
                if (doc) {
                    res.send("El ID de Libreta ya existe");
                }
                else {
                    function guardarInfo() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const guardado = yield hc.save();
                            guardado;
                            res.send('Se registro con exito!');
                        });
                    }
                    guardarInfo();
                }
            });
            validationID;
            console.log(req.body);
        }
        catch (error) {
            console.log('=====> ', error);
        }
    });
}
exports.newHistory = newHistory;
function findHC(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const HC = modelHistory_1.default.findOne({ id: req.params.id }).then(doc => {
                if (doc) {
                    console.log("====> HC", doc);
                    res.send(doc);
                }
                else {
                    res.send("No existe ese ID");
                }
            });
            console.log("=========> Esta en findHC", req.params.id);
        }
        catch (error) {
            console.log("=====> Error", error);
        }
    });
}
exports.findHC = findHC;
//# sourceMappingURL=historyControllers.js.map