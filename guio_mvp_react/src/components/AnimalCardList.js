import React, { useState } from "react";
import "./AnimalCardList.css"

function AnimalCardList(props) {
  return (

      <ul className="AnimalCardList AnimalCard2" >
          <h3>All our pet friends</h3>
        {props.CardListCb.map(a => (
          
            <div key={a.id} >
              <p>{a.petName}</p>      
              <p>{a.species}</p>
              <p>{a.race}</p>
              <p>{a.sex}</p>
              <p>{a.chipNumber}</p>
              <p>{a.age}</p>
              <p>{a.castrate}</p>
              <p> {a.vaccinate} </p>
              <p>{a.joining}</p>
              <p> {a.petDescription}</p>

            
            <button type="button" onClick={e => props.deleteCb(a.id)}>
              Delete
            </button>{" "}
            </div>
          
        ))}
      </ul>
    
  );
}

export default AnimalCardList;