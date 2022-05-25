import React, { useState } from "react";
import "./AnimalCardList.css";

const EMPTY_FORM = {
    petName: "" ,
    species: "",
    race: "",
    sex: "F", 
    chipNumber: "", 
    age: "",
    castrate: 0, 
    vaccinate: 0,
    petDescription: "" 
  };
  
  function AnimalCardForm(props) {
    const [newAnimalCard, setNewAnimalCard] = useState(EMPTY_FORM);
  
    function handleChange(event) {
      let { name, value } = event.target;
      setNewAnimalCard(animalCard => ({ ...animalCard, [name]: value }));
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      let newAnimal = newAnimalCard;
      newAnimal.joining = new Date().toJSON().slice(0,10); //modificamos formato de la fecha.
      props.postAnimalCardCb(newAnimal); 
      setNewAnimalCard(EMPTY_FORM);
    }
  
    return (
        <div className="potato">
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
                <input
                    type="text"
                    name="species"
                    value={newAnimalCard.species}
                    onChange={e => handleChange(e)}
                />
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
                <select name="sex"  onChange={e => handleChange(e) } defaultValue={'F'}>
                    <option value="F" >Female</option> 
                    <option value="M" >Male</option>
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
  