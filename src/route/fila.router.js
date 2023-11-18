import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
  incrementPosicaoAtual,
  findLastPosition,
  findIdByLastPos,
  findFirstPosition,
  updatePosicao,
} from "../controller/fila.controller.js";

const filaRoutes = express.Router();

filaRoutes.route("/").get(findAll).post(create);
filaRoutes.route("/:id").get(findOne).delete(remove);
filaRoutes.route("/incrementar/:id").put(incrementPosicaoAtual)
filaRoutes.route("/lastPosition/last").get(findLastPosition);
filaRoutes.route("/lastPosition/last/:id").get(findIdByLastPos);
filaRoutes.route("/firstPosition/first").get(findFirstPosition).put(updatePosicao);

export default filaRoutes;
