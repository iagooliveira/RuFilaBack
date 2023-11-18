import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from "./util/logger.js";
import HttpStatus from "./util/httpStatus.js";
import alunoRoutes from "./route/aluno.router.js";
import alunoFilaRoutes from "./route/aluno_fila.router.js";
import cardapioPratoRoutes from "./route/cardapio_prato.router.js";
import cardapioRoutes from "./route/cardapio.router.js";
import pratoRoutes from "./route/prato.router.js";
import filaRoutes from "./route/fila.router.js";
import funcionarioRoutes from "./route/funcionario.router.js";
import restauranteRoutes from "./route/restaurante.router.js";
import funcionarioRestauranteRoutes from "./route/funcionario_restaurante.router.js";

dotenv.config();

const port = process.env.PORT || 3005;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Adicione a origem da sua aplicação Angular aqui
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use("/alunos", alunoRoutes);
app.use("/aluno_fila", alunoFilaRoutes);
app.use("/cardapio_prato", cardapioPratoRoutes);
app.use("/cardapios", cardapioRoutes);
app.use("/pratos", pratoRoutes);
app.use("/filas", filaRoutes);
app.use("/funcionarios", funcionarioRoutes);
app.use("/restaurantes", restauranteRoutes);
app.use("/funcionario_restaurante", funcionarioRestauranteRoutes);


app.get("/", (req, res) => {
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Welcome to my API",
      null
    )
  );
});

app.all("*", (req, res) => {
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        "Route not found",
        null
      )
    );
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
