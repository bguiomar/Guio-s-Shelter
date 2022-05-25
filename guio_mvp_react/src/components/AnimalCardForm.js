import React, { useState } from "react";
import "./AnimalCardList.css";

const EMPTY_FORM = {
    petName: "" ,
    species: "",
    race: "",
    sex: "", 
    chipNumber: undefined, 
    age: undefined,
    castrate: undefined, 
    vaccinate: undefined,
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
      props.postAnimalCardCb(newAnimalCard); //??????
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
                <input
                    type="text"
                    name="sex"
                    value={newAnimalCard.sex}
                    onChange={e => handleChange(e)}
                />
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
                <input
                    type="number"
                    name="castrate"
                    value={newAnimalCard.castrate}
                    onChange={e => handleChange(e)}
                />
                </label>

                <label>
                {" "}vaccinate:{" "}
                <input
                    type="number"
                    name="vaccinate"
                    value={newAnimalCard.vaccinate}
                    onChange={e => handleChange(e)}
                />
                </label>

                <label>
                {" "}joining:{" "}
                <input
                    type="text"
                    name="joining"
                    value={newAnimalCard.joining}
                    onChange={e => handleChange(e)}
                />
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
  