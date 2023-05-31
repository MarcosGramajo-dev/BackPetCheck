"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vetsControllers_1 = require("../controllers/vetsControllers");
const router = (0, express_1.Router)();
router.get('/', vetsControllers_1.GetAll);
exports.default = router;
//# sourceMappingURL=vetsRoutes.js.map