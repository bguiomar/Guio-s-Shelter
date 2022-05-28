var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: './files',
  filename: function(req, file, cb) {
    cb(null,`${uuidv4()}-${file.originalname}`);
  }
});

const upload = multer({
  storage: storage
});


router.post("/", upload.single('image'),async (req, res, err) =>{

    if(!req.file.originalname.toLowerCase().match(/\.(jpg|jpeg|png)$/)){
      res.status(425).send({error: "Only image file (jpg, jpeg, png) are supported."})
    }else{

      const image = req.file.filename;
      let sql = `INSERT INTO animalcardImages (imgName, animal) VALUES ("${image}", ${req.body.animalId})`;
      try {
        await db(sql); // add new item (do the insert)
        res.status(201).send("Images added succesfully");
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    }

  }
);

router.get("/:id", async function(req, res, next) {
  let imageId = req.params.id;
  let results = await db(`SELECT * FROM animalcardImages WHERE id =${imageId}`);
  if (results.data.length === 0) {
    res.status(404).send({ error: "Image not found" });
  } else {
    res.send({image: results.data[0].imgName});
  }
});


router.get("/",async function(req, res, next) {
    res.status(200).send("Images");

});

module.exports = router;
