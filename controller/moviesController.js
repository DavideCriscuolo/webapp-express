const connection = require("../db/conncetion");

const index = (re, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err.message });
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
    } else {
      res.json(results[0]);
    }
  });
};

module.exports = {
  index,
  show,
};
