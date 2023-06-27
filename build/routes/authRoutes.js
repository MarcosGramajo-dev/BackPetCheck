"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const historyControllers_1 = require("../controllers/historyControllers");
const tokenVerification_1 = require("../middlewares/tokenVerification");
const router = (0, express_1.Router)();
router.post('/signUp', authController_1.signUp);
router.post('/login', authController_1.signIn);
router.get('/perfil', tokenVerification_1.verificacion, authController_1.profile);
router.post('/newHistory', historyControllers_1.newHistory);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map