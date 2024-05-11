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

app.use(express.static(path.join(__dirname, "..", "dist")));

const port = process.env.PORT || 3030;

app.listen(port, "localhost", (error) => {
  error ? console.log(error) : console.log(`Server listening port ${port}`);
});

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Запросы к страницам
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
      .sendFile(path.join(__dirname, "..", "dist", "main.html"));
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

// Настройка для отправки стилей
app.get("/dist/bundle.css", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(path.join(__dirname, "..", "client", "dist", "bundle.css"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Настройки для отправки изображений
app.get("/dist/images/background-image.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "background-image.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/images/mobile-backgroun-image.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "mobile-backgroun-image.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/images/Rectangle-7.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "Rectangle-7.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/images/Rectangle-9.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "Rectangle-9.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/images/Rectangle-10.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "Rectangle-10.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/images/Rectangle-11.png", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/png")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "images",
          "Rectangle-11.png"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Настройки для отправки .svg
app.get("/dist/svg/menu-button.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "menu-button.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/menu-button_beige.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "svg",
          "menu-button_beige.svg"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/basket.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "basket.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/basket_beige.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "basket_beige.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/bike-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "bike-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/bill-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "bill-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/clock-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "clock-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/coast-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "coast-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/creditcard-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "svg",
          "creditcard-icon.svg"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/favorites.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "favorites.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/favorites_beige.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "svg",
          "favorites_beige.svg"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/frame-01.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "frame-01.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/frame-02.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "frame-02.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/frame-03.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "frame-03.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/instagram-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(
          __dirname,
          "..",
          "client",
          "dist",
          "svg",
          "instagram-icon.svg"
        )
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/item_beige.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "item_beige.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/item.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "item.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/label.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "label.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/profile-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "profile-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/profile-icon_beige.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "profile-icon_beige.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/sale-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "sale-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/search-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "search-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/search-icon_black.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "search-icon_black.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/telegram-icon.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "telegram-icon.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/dist/svg/trash-basket.svg", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "image/svg+xml")
      .sendFile(
        path.join(__dirname, "..", "client", "dist", "svg", "trash-basket.svg")
      );
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Настройки для отпрвки скриптов
app.get("/dist/bundle.js", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "application/javascript")
      .sendFile(path.join(__dirname, "..", "client", "dist", "bundle.js"));
  } catch {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Мидлвар для перехвата ошибок роутинга
app.use((req, res) => {
  res.status(404).sendFile(createPath("error"));
});
