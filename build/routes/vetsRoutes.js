"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vetsControllers_1 = require("../controllers/vetsControllers");
const historyControllers_1 = require("../controllers/historyControllers");
const router = (0, express_1.Router)();
router.get('/', vetsControllers_1.GetAll);
router.get('/HistoryClinic/:id', historyControllers_1.findHC);
exports.default = router;
//# sourceMappingURL=vetsRoutes.js.map