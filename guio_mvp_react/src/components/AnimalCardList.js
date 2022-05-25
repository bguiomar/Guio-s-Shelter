import React, { useState } from "react";
import ".AnimalCardList.css"

function AnimalCardList(props) {
  return (

      <ul className="AnimalCardList">
          <h3>Add a new pet friend</h3>
        {props.allAnimalCardListCb.map(a => (
          <li key={a.id} className="AnimalCard">
            {a.petName} {a.species} {a.race} {a.sex} {a.chipNumber} {a.age} {a.castrate} {a.vaccinate} {a.joining} {a.petDescription}
            <button type="button" onClick={e => props.deleteCb(a.id)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    
  );
}

export default AnimalCardList;