import React, { useState } from "react";
import "./AnimalCardList.css"

function AnimalCardList(props) {
  return (<div className="AnimalCardList">
    <h3>All our pet friends</h3>
    
      <ul className="AnimalCard2">
          
        {props.CardListCb.map(a => (
          
            <div key={a.id} >
              <p>Name :{a.petName}</p>      
              <p>Specie: {a.species}</p>
              <p>Race: {a.race}</p>
              <p>{a.sex}</p>
              <p>{a.chipNumber}</p>
              <p>{a.age}</p>
              <p>{a.castrat}</p>
              <p> {a.vaccinate} </p>
              <p>{ (new Date(a.joining)).toLocaleDateString() }</p> {/* we use a class and then we use the function toLocalDateString() to erase hours from DATE */}
              <p> {a.petDescription}</p>

            
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