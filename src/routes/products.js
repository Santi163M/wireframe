const express = require("express")
const productcontrol = require("../controll/products")
const productrouter = express.Router()


productrouter.get("/product",productcontrol.cart)
productrouter.get("/productdetail",productcontrol.details)
productrouter.get("/productdetail/:id",productcontrol.detailsn)
productrouter.get("/editarproducto", productcontrol.editarproducto)
productrouter.post("editarproducto", productcontrol.editarproductopost)
productrouter.get("/crearproducto", productcontrol.crearproducto)
productrouter.post("/crearproducto", productcontrol.crearproductopost)
productrouter.get("/listadeproductos", productcontrol.listadeproductos)
module.exports = productrouter 