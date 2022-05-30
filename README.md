## Setup

### Motivation

The objective of this project is to solve the lack that I found 1 year ago when I adopted my dog ​​Bimba.
Barcelona does not have a common website to find all the abandoned animals that are in shelters.
With this proposal we unify all the information in a single place, facilitating the location and adoption procedures. :dog: :cat:

### Dependencies

1. BACKEND:

Run in project directory this npms:

- `npm install` This will install server-related dependencies such as `express`. And then `cd client` and run `npm install`. This will install client dependencies (React).

- `npm install --save multer` to be able to upload more than one image to your card.
- `npm install uuid` you will use to give a every image a non repetitive number and
  https://dev.to/maureenoldyck/upload-images-with-react-expressjs-and-mysql-47jn

2. FRONTEND:

- Run `npm react-router-dom`
- Run `npm add mysql nodemon dotenv cors` in your project folder.
- Run `npm i bootstrap@5.2.0-beta1` in your client folder to apply style.

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

- Create a new table called animalcard in file `init_db.sql`:
- Remember to write `DROP TABLE IF EXISTS` at the top of the code and in the proper orden, because first we want to errase animalcarImages and then animalcard. Because if we don't do like that, we errase the card but no the photo. :eye:

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

- Keep in mind that you will need another new table to linked in with the images you want to upload when you submit the animalcard:

```JavaScript
CREATE TABLE animalcardImages(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    imgName VARCHAR(256),
    animal INT,
    FOREIGN KEY (animal) REFERENCES animalcard(id)
);
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create both tables 'animalcard' and 'animalcardImages' in your database. Do not forgot to do a `npm run migrate` every time you do changes in yours databases.

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

### Frontend creation

- If you do not installed before, remember to do `npm install react-router-dom`.

1. APP:

- Import:

```JavaScript
{useState, Routes, Route}
```

,

- Write the routes to be linked in.

A. VIEWS:

1. ADMINVIEW:

- Import all the components you want to see in it. In our case AnimalCardForm.
-

- Inside the funcion AdminView(), we have:

```Javascript
AdminView(){
  showAllAnimalCard() // to show the information in the UserView.
  postImage(animalId, file) // we give 2 arguments to be able to match file with the correct animal
  postAnimalCard(newAnimalCard,file) // we give 2 arguments to be able to match file with the correct file uploaded.
}
```

- In case you need more information related with postImage() you can found more information in https://dev.to/maureenoldyck/upload-images-with-react-expressjs-and-mysql-47jn

2. USERVIEW:

- Import all the components you want to see in it. In our case AnimalCardForm.

- Inside the funcion AdminView(), we have:

  ```Javascript
    UserView(){
        showAllAnimalCard(){
           fetch("/animalcard?order=ASC&limit=15")
        } // to show the information in the UserView.

        filteredAnimalCard(filter){
          // we coding all the filters we planned in the backend. Keep in mind I wanted to ordered all the cards DESC.
        }
  }
  ```

B. COMPONENTS:

1. NAVBAR:

   - Create one and add the NavLink to be able to changes between each views.

2. FILTER BUTTON:

   - Create a sidebar with all the filters you have.

3. ANIMAL CARD FORM:

   - Inside the funcion AnimalCardForm(), we have:

   ```Javascript
     AnimalCardForm(props){
       handleChange(event);
       handleSubmit(event){
          props.postAnimalCardCb(newAnimal,file); // the way we upload both of them at the same time.
       imageHandler(event) // to upload the files.
       }
     }
   ```

4. ANIMAL CARD LIST:

   - Here we have the next functions:

```Javascript
 Castrate(props) // to apply filter
 Vaccinate(props) // to apply filter
 petDescription(props)

 Card(props) // to be able to see an animal card. Here you should include a division to watch the files.
 AnimalCardsList(porps) // to display all de cards in grid.
```
