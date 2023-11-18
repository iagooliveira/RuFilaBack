import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/funcionario_restaurante.controller.js";

const funcionarioRestauranteRoutes = express.Router();

funcionarioRestauranteRoutes.route("/").get(findAll).post(create);
funcionarioRestauranteRoutes.route("/:id").get(findOne).delete(remove);

export default funcionarioRestauranteRoutes;
