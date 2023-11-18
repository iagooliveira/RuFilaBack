import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/fila.query.js";
import HttpStatus from "../util/httpStatus.js";

export const findAll = (req, res) => {
  logger.info("GET /filas");
  database.query(QUERY.GET_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No queues found",
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
            "queues:",
            results
          )
        );
    }
  });
};

export const create = (req, res) => {
  logger.info("CREATE /filas/" + Object.values(req.body));
  database.query(QUERY.CREATE, Object.values(req.body), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error creating queue",
            null
          )
        );
    } else {
      const queue = {
        restaurante_codigo: req.body.restauranteCodigo,
        vagas_restantes: req.body.vagasRestantes,
        posicao_atual: req.body.posicaoAtual,
        data_fila: req.body.dataFila,
      };
      res
        .status(HttpStatus.CREATED.code)
        .send(
          new Response(
            HttpStatus.CREATED.code,
            HttpStatus.CREATED.status,
            "queue created",
            queue
          )
        );
    }
  });
};

export const findOne = (req, res) => {
  logger.info("GET /filas/");
  database.query(QUERY.GET_ONE, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "queue not found",
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
            "queue:",
            results
          )
        );
    }
  });
};

export const remove = (req, res) => {
  logger.info("DELETE /filas/");
  database.query(QUERY.DELETE, Object.values(req.params), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error deleting queue",
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
            "queue deleted",
            null
          )
        );
    }
  });
};

export const updateAfterInsertion = (codigoFila) => {
  logger.info("UPDATE /filas/insertion");
  database.query(
    QUERY.UPDATE_VAGAS_RESTANTES,
    [codigoFila],
    (error, results) => {
      if (error) {
        logger.error(error.message);
        return false;
      } else {
        logger.info("queue updated", results);
        return true;
      }
    }
  );
}

export const incrementPosicaoAtual = (req, res) => {
  logger.info("UPDATE /filas/increment");
  database.query(
    QUERY.UPDATE_POSICAO_ATUAL,
    Object.values(req.params),
    (error, results) => {
      if (error) {
        logger.error(error.message);
        res
          .status(HttpStatus.BAD_REQUEST.code)
          .send(
            new Response(
              HttpStatus.BAD_REQUEST.code,
              HttpStatus.BAD_REQUEST.status,
              "Error incrementing queue",
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
              "queue incremented",
              null
            )
          );
      }
    }
  );
};


export const findLastPosition = (req, res) => {
  logger.info("GET /filas/lastPosition");
  database.query(QUERY.GET_LAST_POSITION, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No queues found",
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
            "queues:",
            results
          )
        );
    }
  });
};



export const findIdByLastPos = (req, res) => {
  logger.info("GET /lastPosition/last/");
  database.query(QUERY.GET_CODIGO_FROM_POSITION, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "queue not found",
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
            "queue:",
            results
          )
        );
    }
  });
};


export const findFirstPosition = (req, res) => {
  logger.info("GET /filas/firstPosition");
  database.query(QUERY.GET_FIRST_POSITION, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No queues found",
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
            "queues:",
            results
          )
        );
    }
  });
};

export const updatePosicao = (req, res) => {
  logger.info("UPDATE /filas/desincrementPos");
  database.query(
    QUERY.UPDATE_POSITIONS,
    Object.values(req.params),
    (error, results) => {
      if (error) {
        logger.error(error.message);
        res
          .status(HttpStatus.BAD_REQUEST.code)
          .send(
            new Response(
              HttpStatus.BAD_REQUEST.code,
              HttpStatus.BAD_REQUEST.status,
              "Error incrementing queue",
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
              "queue incremented",
              null
            )
          );
      }
    }
  );
};