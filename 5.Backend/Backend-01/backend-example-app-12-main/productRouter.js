const express = require("express");
const { createProduct, getAll, getById,DeleteAll, DeleteById} = require("./productControllers");
const productRouter = express.Router();

// Create
productRouter.post("/", createProduct);

// Get all
productRouter.get("/", getAll);

// Get by id
productRouter.get("/:id", getById);

//Update by Id
//productRouter.patch("/:id", UpadteById);

// Delete all
productRouter.delete("/", DeleteAll);

// Delete by Id
productRouter.delete("/:id", DeleteById);

module.exports = productRouter;
