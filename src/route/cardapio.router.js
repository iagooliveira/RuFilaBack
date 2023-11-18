import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/cardapio.controller.js";

const cardapioRoutes = express.Router();

cardapioRoutes.route("/").get(findAll).post(create);
cardapioRoutes.route("/:id").get(findOne).delete(remove);

export default cardapioRoutes;
