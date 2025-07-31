const express = require("express");

const app = express();
const port = process.env.PORT;
const moviesRoUter = require("./routes/movies");
app.use(express.json());
app.use("/movies", moviesRoUter);
app.listen(port, () => {
  console.log(`Il server è collegato alla porta  http://localhost:${port}`);
});
