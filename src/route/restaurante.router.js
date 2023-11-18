import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/restaurante.controller.js";

const restauranteRoutes = express.Router();

restauranteRoutes.route("/").get(findAll).post(create);
restauranteRoutes.route("/:id").get(findOne).delete(remove);

export default restauranteRoutes;
