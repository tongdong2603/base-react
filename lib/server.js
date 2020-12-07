#! /bin/node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = require("http");
var app_1 = __importDefault(require("./app"));
var server = http_1.createServer(app_1["default"]);
server.listen(3001, function () {
    console.log("Server listing on port 3001");
});
