import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/funcionario_restaurante.query.js";
import HttpStatus from "../util/httpStatus.js";

export const findAll = (req, res) => {
  logger.info("GET /funcionario_restaurante");
  database.query(QUERY.GET_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No employee_restaurants found",
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
            "employee_restaurants:",
            results
          )
        );
    }
  });
};

export const create = (req, res) => {
  logger.info("CREATE /funcionario_restaurante/" + Object.values(req.body));
  database.query(QUERY.CREATE, Object.values(req.body), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error creating employee_restaurant",
            null
          )
        );
    } else {
      const employee_restaurant = {
        restaurante_codigo: req.body.restauranteCodigo,
        funcionario_codigo: req.body.funcionarioCodigo,
      };
      res
        .status(HttpStatus.CREATED.code)
        .send(
          new Response(
            HttpStatus.CREATED.code,
            HttpStatus.CREATED.status,
            "employee_restaurant created",
            employee_restaurant
          )
        );
    }
  });
};

export const findOne = (req, res) => {
  logger.info("GET /funcionario_restaurante/");
  database.query(QUERY.GET_ONE, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "employee_restaurant not found",
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
            "employee_restaurant:",
            results
          )
        );
    }
  });
};

export const remove = (req, res) => {
  logger.info("DELETE /funcionario_restaurante/");
  database.query(QUERY.DELETE, Object.values(req.params), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error deleting employee_restaurant",
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
            "employee_restaurant deleted",
            null
          )
        );
    }
  });
};
