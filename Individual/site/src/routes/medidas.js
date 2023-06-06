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

module.exports = router;