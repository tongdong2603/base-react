"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1["default"]();
// Static file
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'public')));
//
app.get('*', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, 'public', 'index.html'));
});
exports["default"] = app;
