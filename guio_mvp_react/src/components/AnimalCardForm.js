import React, { useState } from "react";
import "./AnimalCardList.css";

const EMPTY_FORM = {
    petName: "" ,
    species: "dog",
    race: "",
    sex: "Female", 
    chipNumber: "", 
    age: "",
    castrate: 0, 
    vaccinate: 0,
    petDescription: "" 
  };
  
  function AnimalCardForm(props) {
    const [newAnimalCard, setNewAnimalCard] = useState(EMPTY_FORM);
    const [file, setFile] = useState([]);

    function handleChange(event) {
      let { name, value } = event.target;
      setNewAnimalCard(animalCard => ({ ...animalCard, [name]: value }));
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      let newAnimal = newAnimalCard;
      newAnimal.joining = new Date().toISOString().slice(0,12); //we modify the date format
      props.postAnimalCardCb(newAnimal,file); 
      setNewAnimalCard(EMPTY_FORM);
    }
  
    function imageHandler(event) {
        const file = event.target.files[0];
        setFile(file);
    }

    return (
        <div className="potato">
            <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
            <form  className ="banana" onSubmit={e => handleSubmit(e)}>
                <label>
                {" "}  Name:{" "}
                <input
                    type="text"
                    name="petName"
                    value={newAnimalCard.petName}
                    onChange={e => handleChange(e)}
                />
                </label>
        
                <label>
                {" "}  Species:{" "}
                <select name="species"  onChange={e => handleChange(e) } defaultValue={'dog'}>
                    <option value="cat" >Cat</option> 
                    <option value="dog" >Dog</option>
                </select>
                </label>
                <label>
                {" "} Race:{" "}
                <input
                    type="text"
                    name="race"
                    value={newAnimalCard.race}
                    onChange={e => handleChange(e)}
                />
                </label>

                <label>
                {" "}Sex:{" "}
                <select name="sex"  onChange={e => handleChange(e) } defaultValue={'Female'}>
                    <option value="Female" >Female</option> 
                    <option value="Male" >Male</option>
                </select>
                </label>
                
                <label>
                {" "}chipNumber:{" "}
                <input
                    type="number"
                    name="chipNumber"
                    value={newAnimalCard.chipNumber}
                    onChange={e => handleChange(e)}
                />
                </label>

                <label>
                {" "}age:{" "}
                <input
                    type="number"
                    name="age"
                    value={newAnimalCard.age}
                    onChange={e => handleChange(e)}
                />
                </label>

                <label>
                {" "}castrate:{" "}
                <select name="castrate"  onChange={e => handleChange(e) } defaultValue={'0'}>
                    <option value="0" >No</option> 
                    <option value="1" >Yes</option>
                </select>
                </label>

                <label>
                {" "}vaccinate:{" "}
                <select name="vaccinate"  onChange={e => handleChange(e) } defaultValue={'0'}>
                    <option value="0" >No</option> 
                    <option value="1" >Yes</option>
                </select>
                </label>

                <label>
                {" "}petDescription:{" "}
                <textarea
                    type="text"
                    name="petDescription"
                    value={newAnimalCard.petDescription}
                    onChange={e => handleChange(e)}
                />
                </label>

                <button className="AnimalCardFormBtn" type="submit">
                Submit
                </button>
            </form>
        </div>
   
    );
  }
  
  export default AnimalCardForm;
  