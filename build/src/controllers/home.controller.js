"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = welcome;
function welcome(req, res) {
    return res.json({ message: "Welcome to bezkoder application." });
}
