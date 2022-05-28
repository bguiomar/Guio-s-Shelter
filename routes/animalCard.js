var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");},
  filename: function(req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null,`uploads/${file.originalname}-${Date.now()}.${ext}`);
  }
});

const upload = multer({
  storage: storage
});

/* GET users listing. */
router.get('/',  function(req, res, next) {
 
  let condition = "";

  // here we create the query that the clients will use:
  if (req.query.species){
    condition += `species="${req.query.species}"`;
  }

  if (req.query.race){
    if (condition === ""){
      condition += `race = "${req.query.race}"`;
    }else{
      condition += ` and race = "${req.query.race}"`;
    }
  }

  if (req.query.sex){
    if (condition === ""){
      condition += `sex = "${req.query.sex}"`;
    }else{
      condition += ` and sex = "${req.query.sex}"`;
    }
  }

  if (req.query.minage){
    if (condition === ""){
      condition += `age >= "${req.query.minage}"`;
    }else{
      condition += ` and age >= "${req.query.minage}"`;
    }
  }

  if (req.query.maxage){
    if (condition === ""){
      condition += `age <= "${req.query.maxage}"`;
    }else{
      condition += ` and age <= "${req.query.maxage}"`;
    }
  }

  if (req.query.castrate){
    if (condition === ""){
      condition += `castrate = "${req.query.castrate}"`;
    }else{
      condition += ` and castrate = "${req.query.castrate}"`;
    }
  }
  if (req.query.vaccinate){
    if (condition === ""){
      condition += `vaccinate = "${req.query.vaccinate}"`;
    }else{
      condition += ` and vaccinate = "${req.query.vaccinate}"`;
    }
  }

  let sql_query = null;
  if (condition === ""){
     sql_query = "SELECT * FROM animalcard";
  }else{
    sql_query = "SELECT * FROM animalcard WHERE " + condition;
  }
  
  if (req.query.order){
    if (req.query.order === "DESC"){
      sql_query += " ORDER BY joining DESC";
    }else{
      sql_query += " ORDER BY joining ASC";
    }
  }

  if (req.query.limit){
      sql_query += " LIMIT " + req.query.limit;
  }


  db(sql_query)
  .then(results => {

    let animals = results.data;
    for (let i; i < animals.length; i++){
      console.log(result_img);
      db(`SELECT * FROM animalcardImages WHERE animal =${animals[i].id}`).
      then (results_img => {
        
        if (results_img.data.length > 0){
          animals[i].images = results_img.data;
        }
      })
    }
    res.send(animals);




  })
  .catch(err => res.status(500).send(err));
});

/* GET one animalCard */
router.get("/:id", async function(req, res, next) {
  let animalId = req.params.id;
  let results = await db(`SELECT * FROM animalcard WHERE id =${animalId}`);

  let result_img = null;
  
   

  if (results.data.length === 0) {
    res.status(404).send({ error: "Animal not found" });
  } else {
    let result_img = await db(`SELECT * FROM animalcardImages WHERE animal =${animalId}`);
    let animal = results.data[0];
    animal.images =[];
    if (result_img.data.length > 0){
      animal.images = result_img.data;
    }
    res.send(animal);
  }
});

// INSERT a new animalcard into the DB
router.post("/animalcard", async function(req, res, next) {
  
  let { petName, species, race, sex, chipNumber, age, castrate, vaccinate, joining, petDescription } = req.body;
  let sql = `INSERT INTO animalcard (petName, species, race, sex, chipNumber, age, castrate, vaccinate, joining, petDescription ) VALUES ("${petName}", "${species}", "${race}", "${sex}", ${chipNumber}, ${age}, ${castrate}, ${vaccinate}, "${joining}", "${petDescription}")`;

  try {
    let insert_results = await db(sql); // add new item (do the insert)
    let results = await db(`SELECT * FROM animalcard WHERE id = ${insert_results.inserted_id}`);
    res.status(201).send(results);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/:id", async function(req, res, next) {
  
  let animalcardId = req.params.id;

  try {
    let results = await db(`SELECT * FROM animalcard WHERE id= ${animalcardId}`);
    if (results.data.length === 0) {
      res.status(404).send({ error: "Pet not found, try again!" });
    } else {
      await db(`DELETE FROM animalcard WHERE id = ${animalcardId}`);
      results = await db("SELECT * FROM animalcard");
      res.status(201).send(results.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;
