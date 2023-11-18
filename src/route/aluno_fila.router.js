import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
  findFirstPosition,
  updatePosicao,
} from "../controller/aluno_fila.controller.js";

const alunoFilaRoutes = express.Router();

alunoFilaRoutes.route("/").get(findAll).post(create);
alunoFilaRoutes.route("/:id").get(findOne).delete(remove);
alunoFilaRoutes.route("/alunopos/firstPosition").get(findFirstPosition).put(updatePosicao);

export default alunoFilaRoutes;
