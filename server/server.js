import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();

const app = express();

// app.set("view engine", "html");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

const port = process.env.PORT || 3030;

app.listen(port, "localhost", (error) => {
  error ? console.log(error) : console.log(`Server listening port ${port}`);
});

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/dist/bundle.css", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/css")
      .sendFile(path.join(__dirname, "..", "client", "dist", "bundle.css"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "main.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/main", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "main.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/catalog", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/authorization", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "authorization.html")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/basket", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "basket.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/contacts", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "contacts.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/favorites", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "favorites.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/payments", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "payments.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/profile", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "profile.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/returns", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "text/html")
      .sendFile(path.join(__dirname, "..", "client", "dist", "returns.html"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Мидлвар для перехвата ошибок роутинга
app.use((req, res) => {
  res.status(404).sendFile(createPath("error"));
});
