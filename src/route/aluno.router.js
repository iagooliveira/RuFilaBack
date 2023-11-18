import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/aluno.controller.js";

const alunoRoutes = express.Router();

alunoRoutes.route("/").get(findAll).post(create);
alunoRoutes.route("/:id").get(findOne).delete(remove);

export default alunoRoutes;
