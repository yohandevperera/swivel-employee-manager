import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import routes from "../src/routes/index";
import swaggerUI from "swagger-ui-express";
import * as swaggerDocument from "../src/swagger.json";
import path from "path";

dotenv.config();

if (!process.env.SERVER_PORT) {
  process.exit();
}

const PORT: number = parseInt(process.env.SERVER_PORT as string, 10) || 5000;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(
    "/static",
    express.static(path.join(__dirname, "../../client/build//static"))
  );
  app.get("*", function (req, res) {
    res.sendFile("index.html", {
      root: path.join(__dirname, "../../client/build/"),
    });
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev")); // logging requests to the console
app.use("/api", routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
