import React, { useState } from "react";
import "./AnimalCardList.css"

function AnimalCardList(props) {
  return (<div className="AnimalCardList">
    <h3>All our pet friends</h3>
    
      <ul className="AnimalCard2">
          
        {props.CardListCb.map(a => (
          
            <div key={a.id} >
              <p>Name: {a.petName}</p>      
              <p>Specie: {a.species}</p>
              <p>Race: {a.race}</p> 
              <p>Sex: {a.sex}</p>
              <p>Chip Number: {a.chipNumber}</p>
              <p>Age: {a.age}</p>
              <p>Castrate: {a.castrat}</p>
              <p>Vaccinate: {a.vaccinate} </p>
              <p>Join Date: { (new Date(a.joining)).toLocaleDateString() }</p> {/* we use a class and then we use the function toLocalDateString() to erase hours from DATE */}
              <p>Description: {a.petDescription}</p>

            
            {/* <button type="button" onClick={e => props.deleteCb(a.id)}>
              Delete
            </button>{" "} */}
            </div>
          
        ))}
      </ul>
    </div>
  );
}

export default AnimalCardList;