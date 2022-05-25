import React, { useState } from "react";


function AnimalCardList(props) {
  return (
    <div>
      <ul className="animalCardList">
        {props.allAnimalCardListCb.map(a => (
          <li key={a.id}>
            {a.petName} {a.species} {a.race} {a.sex} {a.chipNumber} {a.age} {a.castrate} {a.vaccinate} {a.joining} {a.petDescription}
            <button type="button" onClick={e => props.deleteCb(a.id)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalCardList;