var express = require("express");
var router = express.Router();
const {
  buscarProductos,
  obtenerProductoPorId,
} = require("../controllers/product-controllers");

/* GET home page. */
router.get("/api/items", buscarProductos);
router.get("/api/items/:id", obtenerProductoPorId);

module.exports = router;
