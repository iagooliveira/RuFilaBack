import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/aluno_fila.query.js";
import HttpStatus from "../util/httpStatus.js";
import { updateAfterInsertion } from "./fila.controller.js";

export const findAll = (req, res) => {
  logger.info("GET /aluno_fila");
  database.query(QUERY.GET_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No student_queues found",
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
            "student_queues:",
            results
          )
        );
    }
  });
};

/*export const create = (req, res) => {
  logger.info("CREATE /aluno_fila/" + Object.values(req.body));

  database.query(
    QUERY.GET_LAST_POSITION,
    req.body.codigo_fila,
    (error, results) => {
      if (!results) {
        res
          .status(HttpStatus.OK.code)
          .send(
            new Response(
              HttpStatus.OK.code,
              HttpStatus.OK.status,
              "No student_queues found",
              null
            )
          );
      } else {
        const posicao = (results[0].posicao || 0) + 1;
        req.body.posicao = posicao;
        database.query(
          QUERY.CREATE,
          Object.values(req.body),
          (error, results) => {
            if (error) {
              logger.error(error.message);
              res
                .status(HttpStatus.BAD_REQUEST.code)
                .send(
                  new Response(
                    HttpStatus.BAD_REQUEST.code,
                    HttpStatus.BAD_REQUEST.status,
                    "Error creating student_queue",
                    null
                  )
                );
            } else {
              const student_queue = {
                aluno_matricula: req.body.alunoMatricula,
                codigo_fila: req.body.codigoFila,
                posicao: req.body.posicao,
              };
              res
                .status(HttpStatus.CREATED.code)
                .send(
                  new Response(
                    HttpStatus.CREATED.code,
                    HttpStatus.CREATED.status,
                    "student_queue created",
                    student_queue
                  )
                );
              updateAfterInsertion(student_queue.codigo_fila);
            }
          }
        );
      }
    }
  );
};*/

export const findOne = (req, res) => {
  logger.info("GET /aluno_fila/");
  database.query(QUERY.GET_ONE, Object.values(req.params), (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            "student_queue not found",
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
            "student_queue:",
            results
          )
        );
    }
  });
};

export const remove = (req, res) => {
  logger.info("DELETE /aluno_fila/");
  database.query(QUERY.DELETE, Object.values(req.params), (error, results) => {
    if (error) {
      logger.error(error.message);
      res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "Error deleting student_queue",
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
            "student_queue deleted",
            null
          )
        );
    }
  });
};




export const create = (req, res) => {
  logger.info("CREATE /aluno_fila/" + Object.values(req.body));

  
        database.query(
          QUERY.CREATE,
          Object.values(req.body),
          (error, results) => {
            if (error) {
              logger.error(error.message);
              res
                .status(HttpStatus.BAD_REQUEST.code)
                .send(
                  new Response(
                    HttpStatus.BAD_REQUEST.code,
                    HttpStatus.BAD_REQUEST.status,
                    "Error creating student_queue",
                    null
                  )
                );
            } else {
              const student_queue = {
                aluno_matricula: req.body.alunoMatricula,
                codigo_fila: req.body.codigoFila,
                posicao: req.body.posicao,
              };
              res
                .status(HttpStatus.CREATED.code)
                .send(
                  new Response(
                    HttpStatus.CREATED.code,
                    HttpStatus.CREATED.status,
                    "student_queue created",
                    student_queue
                  )
                );
              updateAfterInsertion(student_queue.codigo_fila);
            }
          }
        );
      
    }




    export const findFirstPosition = (req, res) => {
      logger.info("GET /aluno_fila/firstPosition");
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
      logger.info("UPDATE /aluno_fila/desincrementPos");
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
