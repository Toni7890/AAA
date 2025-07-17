"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
var processor_1 = require("./processor");
var creator_1 = require("./creator");
exports.hooks = {
    process: processor_1.process,
    create: creator_1.create,
    reducer: "auto",
};
//# sourceMappingURL=index.js.map