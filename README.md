## Setup

### Motivation

The objective of this project is to solve the lack that I found 1 year ago when I adopted my dog ​​Bimba.
Barcelona does not have a common website to find all the abandoned animals that are in shelters.
With this proposal we unify all the information in a single place, facilitating the location and adoption procedures. :dog: :cat:

### Dependencies

1. BACKEND -general folder:

Run in project directory this npms:

- `npm install` This will install server-related dependencies such as `express` and then `npm run start` to install client dependencies (REACT).

- `npm install --save multer` to be able to upload more than one image to your card.
- `npm install uuid` you will use to give a every image a non repetitive number and if you need more help, check this link:  
  https://dev.to/maureenoldyck/upload-images-with-react-expressjs-and-mysql-47jn

2. FRONTEND -cd client:

- Run `npm install` and then `npm run start`
- Run `npm react-router-dom`
- Run `npm add mysql nodemon dotenv cors` 
- Run `npm i bootstrap@5.2.0-beta1` 

### Database creation

- Access the MySQL interface in your terminal by running `mysql -u root -p`.
- Create a new database called animalshelter: `create database animalshelter`.
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=animalshelter
  DB_PASS=root
```
- `Run npm migrate` in the project folder of this repository, in a new terminal window. This will create two tables: 'animalcard' and 'animalcardImages'.
- Make sure you understand how the tables are constructed. In your MySQL console, you can run with "use animalcard"; and then "describe [table]"; to see the structure of the table.

- If doesn't works, you can create by yourself. You should create those tables called in file `init_db.sql`:
- Remember to write `DROP TABLE IF EXISTS` at the top of the code and in the proper orden, because first we want to errase animalcarImages and then animalcard. Because if we don't do like that, we errase the card but no the image. :eye:

```JavaScript
DROP TABLE IF EXISTS animalcardImages;
DROP TABLE IF EXISTS animalcard;
```

```JavaScript
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
```

- animalcardImages we use to upload images when you submit the animalcard. We link both of them, using "foreing key...": 

```JavaScript
CREATE TABLE animalcardImages(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    imgName VARCHAR(256),
    animal INT,
    FOREIGN KEY (animal) REFERENCES animalcard(id)
);
```
### Development

Run `npm run start` in project directory to start the Express server on port 5000
In another terminal, do cd client and run yarn start to start the client in development mode with hot reloading in port 3000.

### Routes creation

We need 3 for the project: `animalCard.js`, `images.js` and `index.js`.

1.  For `animalCard.js`: here you should write all the methods you want to do when you post/add a new pet when you will be at the AdminView Frontend.
    You should need:
    1.1 **GET:** `"/"` all the animalcards.
    Here you should apply all the querys that clients will use in form the filters. Example: Species, Age, Sex...
    By default I apply a filter ordering all the cards by descending (DESC) using the date I post/add the new pet. Because this way I want to users be focus on the oldest pet who have spent more time in the shelter. And I applyed a limit to show me no more than 15 cards.
    1.2 **GET:** `"/:id"` one animalcard using the Id.
    1.3 **POST** `"/animalcard"` to be able to submit and added a new pet. Pay atenttion I change the way I receive the information. See the `helper.js`, with that way I receive the information of the animal I posted instead of receive all of them.

         ```JavaScript
         module.exports = async function db(query) {
         const results = {
         data: [],
         error: null,
         inserted_id: null, // added
         };
            "... scroll down..."
         results.inserted_id = result.insertId; //added

2.  For `images.js`: to upload files.

- I use the `npm multer` to be able to upload more than one file. If you need more informatión you can find it in : https://dev.to/maureenoldyck/upload-images-with-react-expressjs-and-mysql-47jn
- I use the `npm uuidv4` to avoid repeating the file name, it generates a random number, which is unique and unrepeatable. This way we avoid overwriting.
  2.1. **Get** `"/:id"` You will have to use the animalId to match the animalcard you post.
  2.2. **Post** `"/"` You shoul apply a condition to filter which type of image extension are able to be upload.

### HOW TO USE THE APP:

The main purpose is to upload information from a new animal, so you should go to the ADMINVIEW and upload a photo and the pet info and then click on submit. 
You will see the info en both views (admin and user). 

The backend is prepared to be able to upload more than one image. 

### POSSIBLE FEATURE EXTENSIONS: 

1. Create a delete button in the adminview to be able to delete the animalcard when the animal will be adopted. 
2. Put by default when you open the web, see the userview. 
3. Make the animalcard clickable and it redirect you to a new view (for example "adoptionview") where you can fill out an adoption.
4. Create an adoption form and submit the info to the backend and make itvisible to the admin. 
5. Create a button in adminview to be able to see all the adoptions requests. 
6. Create a login/pass to go in to the adminview, with that only administrators could post information.
7. Localitation, be able to see in a map where to say in which shelter is the animal. 
8. Make a filter by localitation. 
9. Make a carrousel in the animalcard to be able to see more than one photo.

Thanks in advance to be part of my project :)
