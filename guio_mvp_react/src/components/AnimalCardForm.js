import React, { useState } from "react";

const EMPTY_FORM = {
    petName: "" ,
    species: "",
    race: "",
    sex: "", 
    chipNumber: null, 
    age: null,
    castrate: null, 
    vaccinate: null,
    joining: "", 
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
      props.postAnimalCardCb(newAnimalCard);
      setNewAnimalCard(EMPTY_FORM);
    }
  
    return (
      <form onSubmit={e => handleSubmit(e)}>
        <label>
           Name:{" "}
          <input
            type="text"
            name="PetName"
            value={newAnimalCard.petName}
            onChange={e => handleChange(e)}
          />
        </label>
  
        <label>
          Species:{" "}
          <input
            type="text"
            name="species"
            value={newAnimalCard.species}
            onChange={e => handleChange(e)}
          />
        </label>
        <button className="AnimalCardFormBtn" type="submit">
          Submit
        </button>
      </form>
    );
  }
  
  export default AnimalCardForm;
  