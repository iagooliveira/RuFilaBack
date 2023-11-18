import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/cardapio_prato.controller.js";

const cardapioPratoRoutes = express.Router();

cardapioPratoRoutes.route("/").get(findAll).post(create);
cardapioPratoRoutes.route("/:id").get(findOne).delete(remove);

export default cardapioPratoRoutes;
