import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/funcionario.controller.js";

const funcionarioRoutes = express.Router();

funcionarioRoutes.route("/").get(findAll).post(create);
funcionarioRoutes.route("/:id").get(findOne).delete(remove);

export default funcionarioRoutes;
