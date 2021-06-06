"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var schema_1 = __importDefault(require("./schema"));
var graphql_1 = require("graphql");
var app = express_1.default();
app.use(express_1.default.text({ type: "application/graphql" }));
app.post("/graphql", function (req, res) {
    graphql_1.graphql(schema_1.default, req.body)
        .then(function (result) { return res.send(result); })
        .catch(function (err) { return console.error(err); });
});
var port = 3000;
var server = app.listen(port, function () {
    console.log("Actively listening on port " + port);
});
exports.default = server;
