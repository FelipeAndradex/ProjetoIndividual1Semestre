var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/totalUsuarios", function (req, res) {
    medidaController.totalUsuarios(req, res);
});

router.get("/totalGenios", function (req, res) {
    medidaController.totalGenios(req, res);
});

router.get("/totalQuizzes", function (req, res) {
    medidaController.totalQuizzes(req, res);
});

router.get("/rankingQuizzes", function (req, res) {
    medidaController.rankingQuizzes(req, res);
});

router.post("/inserirPontos", function (req, res) {
    medidaController.inserirPontosUsuarios(req, res);
});

module.exports = router;