const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const moviesRoUter = require("./routes/movies");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/movies", moviesRoUter);

//middleware per  gestione degli errori
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: "Errore nel server" });
});
//middleware per  gestione delle rotte non trovate
app.use((req, res, next) => {
  res.status(404).send({ message: "Rotta non trovata" });
});

app.listen(port, () => {
  console.log(`Il server è collegato alla porta  http://localhost:${port}`);
});
