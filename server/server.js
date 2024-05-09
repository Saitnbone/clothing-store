import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "pug");

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

app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(express.static(path.join(__dirname, "..", "client", "dist", "main.html")));
});

app.get("/", (req, res) => {
    res
      .status(200)
      .sendFile(express.static(path.join(__dirname, "..", "client", "dist", "bundle.css")));
});

app.get("/home", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "main.html"));
    // .sendFile(path.join(__dirname, '..', 'client', 'dist', 'bundle.css'));
});

app.get("/main", (req, res) => {
  res.status(200).render(createPath("main"));
});

app.get("/catalog", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
//   res.status(200).render(createPath("catalog"));
});

app.get("/authorization", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
    
//   res.status(200).render(createPath("authorization"));
});

app.get("/basket", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
  res.status(200).render(createPath("basket"));
});

app.get("/contacts", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
  res.status(200).render(createPath("contacts"));
});

app.get("/favorites", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
  res.status(200).render(createPath("favorites"));
});

app.get("/payments", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html" && 'bundle.css'));
//   res.status(200).render(createPath("payments"));
});

app.get("/profile", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
//   res.status(200).render(createPath("profile"));
});

app.get("/returns", (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "catalog.html"));
//   res.status(200).render(createPath("returns"));
});

Мидлвар для перехвата ошибок роутинга
app.use((req, res) => {
  res.status(404).sendFile(createPath("error"));
});
