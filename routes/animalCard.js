var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM animalcard;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

/* GET one animalCard */
router.get("/:id", async function(req, res, next) {

  let animalId = req.params.id;
  let results = await db(`SELECT * FROM animalcard WHERE id =${animalId}`);
  if (results.data.length === 0) {
    res.status(404).send({ error: "Animal not found" });
  } else {
    res.send(results.data[0]);
  }
});

// INSERT a new animalcard into the DB
router.post("/", async function(req, res, next) {
  
  let { petName, species, race, sex, chipNumber, age, castrate, vaccinate, joining, petDescription } = req.body;
  let sql = `INSERT INTO animalcard (petName, species, race, sex, chipNumber, age, castrate, vaccinate, joining, petDescription ) VALUES ("${"petName"}, ${"species"}, ${"race"}, ${"sex"}, ${chipNumber}, ${age}, ${castrate}, ${vaccinate}, ${"joining"}, ${"petDescription"}")`;

  try {
    await db(sql); // add new item (do the insert)
    let results = await db("SELECT * FROM animalcard");
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
