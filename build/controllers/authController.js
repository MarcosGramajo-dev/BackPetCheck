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
exports.profile = exports.signIn = exports.signUp = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//-----------------------------------------------------registro-------------------------------------------------------------
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Guardado de usuario
        try {
            const veterinaria = new usuarios_1.default({
                // email: req.body.email,
                // password: req.body.password,
                email: req.body.user.email,
                password: req.body.user.password,
                vet: {
                    image: req.body.vet.image,
                    nameLocal: req.body.vet.nameLocal,
                    ownerVet: req.body.vet.ownerVet,
                    services: req.body.vet.service,
                    numMatricula: req.body.vet.numMatricula,
                    province: req.body.vet.province,
                    departament: req.body.vet.departament,
                    address: req.body.vet.address,
                    tel: req.body.vet.tel,
                    telWp: req.body.vet.telWp,
                    web: req.body.vet.web,
                    instagram: req.body.vet.instagram,
                    tiktok: req.body.vet.tiktok,
                    facebook: req.body.vet.facebook
                }
            });
            const verificacionEmail = yield usuarios_1.default.findOne({ email: veterinaria.email }).then(doc => {
                if (doc) {
                    res.send("El Email ya esta en uso!");
                }
                else {
                    function guardarInfo() {
                        return __awaiter(this, void 0, void 0, function* () {
                            veterinaria.password = yield veterinaria.encriptado(veterinaria.password);
                            const guardado = yield veterinaria.save();
                            const token = jsonwebtoken_1.default.sign({ _id: guardado._id }, process.env.TOKEN_SECRET);
                            res.header('elToken', token).send('Se registro con exito!');
                        });
                    }
                    guardarInfo();
                }
            }).catch(error => console.log(error));
            verificacionEmail;
        }
        catch (error) {
            console.error(error);
            res.status(500).send('algo salio mal');
        }
    });
}
exports.signUp = signUp;
//--------------------------------------------------------login----------------------------------------------------------
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        //mejorar con TRY / CATCH
        try {
            const usuarioEncontrado = yield usuarios_1.default.findOne({
                email: req.body.email
            });
            if (!usuarioEncontrado) {
                return res.status(400).json('Usuario no encontrado');
            }
            const contrasenaCorrecta = yield usuarioEncontrado.validacionEncriptado(req.body.password);
            if (!contrasenaCorrecta) {
                return res.status(403).send('Contrasena invalida');
            }
            const elToken = jsonwebtoken_1.default.sign({ _id: usuarioEncontrado._id }, process.env.TOKEN_SECRET, {
                expiresIn: 60 * 30 //  =media hora // (segs, mins, horas)
            });
            return res.header('authorizationToken', elToken).json(usuarioEncontrado);
        }
        catch (error) {
            console.error(error);
            return res.status(404).send('Usuario no registrado');
        }
        // res.send('logeado');
    });
}
exports.signIn = signIn;
//---------------------------------------------------perfil---------------------------------------------------------------
function profile(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.header('autorizationToken'));
        // console.log(req.userId);
        res.send('Success');
    });
}
exports.profile = profile;
//# sourceMappingURL=authController.js.map