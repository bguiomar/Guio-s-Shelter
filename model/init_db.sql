DROP TABLE IF EXISTS animalcardImages;
DROP TABLE IF EXISTS animalcard;
CREATE TABLE animalcard(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    petName VARCHAR(100),
    species VARCHAR(100),
    race VARCHAR(100),
    sex VARCHAR(100),
    chipNumber BIGINT,
    age INTEGER,
    castrate TINYINT,
    vaccinate TINYINT,
    joining DATETIME DEFAULT CURRENT_TIMESTAMP,
    petDescription TEXT
);


CREATE TABLE animalcardImages(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    imgName VARCHAR(256),
    animal INT,
    FOREIGN KEY (animal) REFERENCES animalcard(id)
);
