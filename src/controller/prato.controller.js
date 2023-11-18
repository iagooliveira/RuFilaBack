import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/prato.query.js";
import HttpStatus from "../util/httpStatus.js";

export const findAll = (req, res) => {
  logger.info("GET /pratos");
  database.query(QUERY.GET_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No dishes found",
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
            "dishes:",
            results
          )
        );
    }
  });
};

export const create = (req, res) => {
  logger.info("CREATE /pratos/" + Object.values(req.body));
  database.query(QUERY.CREATE, Object.values(req.body), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error creating dish",
            null
          )
        );
    } else {
      const dish = {
        principal: req.body.principal,
        salada: req.body.salada,
        carne: req.body.carne,
        suco: req.body.suco,
        sobremesa: req.body.sobremesa,
      };
      res
        .status(HttpStatus.CREATED.code)
        .send(
          new Response(
            HttpStatus.CREATED.code,
            HttpStatus.CREATED.status,
            "dish created",
            dish
          )
        );
    }
  });
};

export const findOne = (req, res) => {
  logger.info("GET /pratos/");
  database.query(QUERY.GET_ONE, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "dish not found",
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
            "dish:",
            results
          )
        );
    }
  });
};

export const remove = (req, res) => {
  logger.info("DELETE /pratos/");
  database.query(QUERY.DELETE, Object.values(req.params), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error deleting dish",
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
            "dish deleted",
            null
          )
        );
    }
  });
};
