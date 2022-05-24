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
    joining DATE,
    petDescription TEXT
);
INSERT INTO animalcard (petName, species, race, sex,chipNumber, age, castrate, vaccinate, joining , petDescription)
    VALUES ('Bimba', 'Dog', 'Mix', 'F', '000000000001', 2, 1, 1, '2019-03-05', 'Guiomar is dog, she love plays with pine cone and taking a naps during summer '), ('Flama', 'Dog', 'Mix', 'F', '000000000002', 2, 1, 1, '2019-09-07', 'Irene is dog, she is black and she love go by Kayak');