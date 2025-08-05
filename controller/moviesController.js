const connection = require("../db/conncetion");

const index = (re, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Nessun film trovato" });
    }
    console.log(results);
    res.json(results);
  });
};

const show = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `movies` WHERE `id` = ?;";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Nessun film trovato" });
    } else {
      res.json(results[0]);
    }
  });
};

const showAll = (req, res) => {
  // modificata query coin il Join
  const id = req.params.id;
  const sql =
    "SELECT * FROM movies JOIN reviews ON reviews.movie_id = movies.id  WHERE movies.id = ? ;";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err.message });
    }

    if (results.length > 0) {
      return res.status(404).json({ message: "Nessun film trovato" });
    }
    console.log(results);
    //create due varibili dove una contiene sottoforma di ogetto il primo risultato dell'array in modo tale da poter prendere solo una volta i dati del film, l'altro contiene tutti i dati relativi alle recensioni del film pushati nell array vuota che ho inizzializato nell oggetto
    const movie = {
      id: results[0].id,
      title: results[0].title,
      image: results[0].image,
      director: results[0].director,
      genre: results[0].genre,
      abstract: results[0].abstract,
      reviews: [],
    };
    results.forEach((row) => {
      if (row.id) {
        movie.reviews.push({
          id: row.id,
          name: row.name,
          vote: row.vote,
          text: row.text,
        });
      }
    });

    console.log(movie);
    res.json(movie);
  });
};

module.exports = {
  index,
  show,
  showAll,
};
