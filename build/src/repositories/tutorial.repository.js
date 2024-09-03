"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
{
    console.log("tutorialRepository");
}
class TutorialRepository {
    save(tutorial) {
        return new Promise((resolve, reject) => {
            db_1.default.query("INSERT INTO tutorials (title, description, published) VALUES(?,?,?)", [tutorial.title, tutorial.description, tutorial.published ? tutorial.published : false], (err, res) => {
                if (err)
                    reject(err);
                else
                    this.retrieveById(res.insertId)
                        .then((tutorial) => resolve(tutorial))
                        .catch(reject);
            });
        });
    }
    retrieveAll(searchParams) {
        let query = "SELECT * FROM tutorials";
        let condition = "";
        if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.published)
            condition += "published = TRUE";
        if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.title)
            condition += `LOWER(title) LIKE '%${searchParams.title}%'`;
        if (condition.length)
            query += " WHERE " + condition;
        return new Promise((resolve, reject) => {
            db_1.default.query(query, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    retrieveById(tutorialId) {
        return new Promise((resolve, reject) => {
            db_1.default.query("SELECT * FROM tutorials WHERE id = ?", [tutorialId], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res === null || res === void 0 ? void 0 : res[0]);
            });
        });
    }
    update(tutorial) {
        return new Promise((resolve, reject) => {
            db_1.default.query("UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?", [tutorial.title, tutorial.description, tutorial.published, tutorial.id], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
    delete(tutorialId) {
        return new Promise((resolve, reject) => {
            db_1.default.query("DELETE FROM tutorials WHERE id = ?", [tutorialId], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
    deleteAll() {
        return new Promise((resolve, reject) => {
            db_1.default.query("DELETE FROM tutorials", (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
}
exports.default = new TutorialRepository();
