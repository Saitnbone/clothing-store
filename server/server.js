import path from "path";
import express from "express";

const app = express();

const port = process.env.PORT || 3010;

const createPath = (page) =>{
    path.resolve(__dirname, 'client/dist', `${page}.html`);
}

app.listen(port, "localhost", (error) => {
    error ? console.log(error) : console.log(`Server listening port ${port}`);
  });