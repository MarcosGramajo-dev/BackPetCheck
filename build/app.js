"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("./DB");
const dotenv_1 = __importDefault(require("dotenv"));
const vetsRoutes_1 = __importDefault(require("./routes/vetsRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'https://petcheck.com.ar/',
};
//Middlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)(corsOptions)); //configurar bien esto
app.options('*', (0, cors_1.default)());
app.use((0, helmet_1.default)()); //revisar parametros para agregar
//Routes
app.post('/regTest', (req, res) => {
    console.log(req.body);
    res.status(201).send('Llegaron los datos');
});
app.use('/', vetsRoutes_1.default);
app.use('/auth', authRoutes_1.default);
//Config
app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map