import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/cardapio.query.js";
import HttpStatus from "../util/httpStatus.js";

export const findAll = (req, res) => {
  logger.info("GET /cardapios");
  database.query(QUERY.GET_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No menus found",
            null
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "menus:",
            results
          )
        );
    }
  });
};

export const create = (req, res) => {
  logger.info("CREATE /cardapios/" + Object.values(req.body));
  database.query(QUERY.CREATE, Object.values(req.body), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error creating menu",
            null
          )
        );
    } else {
      const menu = {
        restaurante_codigo: req.body.restauranteCodigo,
        data_cardapio: req.body.dataCardapio,
        pratos_codigo: req.body.pratosCodigo,
      };
      res
        .status(HttpStatus.CREATED.code)
        .send(
          new Response(
            HttpStatus.CREATED.code,
            HttpStatus.CREATED.status,
            "menu created",
            menu
          )
        );
    }
  });
};

export const findOne = (req, res) => {
  logger.info("GET /cardapios/");
  database.query(QUERY.GET_ONE, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "menu not found",
            null
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "menu:",
            results
          )
        );
    }
  });
};

export const remove = (req, res) => {
  logger.info("DELETE /cardapios/");
  database.query(QUERY.DELETE, Object.values(req.params), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error deleting menu",
            null
          )
        );
    } else {
      res
        .status(HttpStatus.NO_CONTENT.code)
        .send(
          new Response(
            HttpStatus.NO_CONTENT.code,
            HttpStatus.NO_CONTENT.status,
            "menu deleted",
            null
          )
        );
    }
  });
};
