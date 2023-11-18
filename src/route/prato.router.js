import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/prato.controller.js";

const pratoRoutes = express.Router();

pratoRoutes.route("/").get(findAll).post(create);
pratoRoutes.route("/:id").get(findOne).delete(remove);

export default pratoRoutes;
