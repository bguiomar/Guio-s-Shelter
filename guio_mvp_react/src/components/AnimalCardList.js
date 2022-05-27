import React, { useState } from "react";
import "./AnimalCardList.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function AnimalCardList(props) {
  return (
<div className="container">
<div className="row">
  
  {props.CardListCb.map(a => (
    <div className="mb-3 row">
    <div className="card col ">
      <div className="card-body">
          <div key={a.id} >  
          <h4 className="card-title ">{a.petName}</h4>
            <p>Specie: {a.species}</p>
            <p>Race: {a.race}</p> 
            <p>Sex: {a.sex}</p>
            <p>Chip Number: {a.chipNumber}</p>
            <p>Age: {a.age}</p>
            <p>Castrate: {a.castrat}</p>
            <p>Vaccinate: {a.vaccinate} </p>
            <p>Join Date: { (new Date(a.joining)).toLocaleDateString() }</p> {/* we use a class and then we use the function toLocalDateString() to erase hours from DATE */}
            <p>Description: {a.petDescription}</p>
          </div> 
        <a href="#" className="btn btn-primary">Adopt me </a>
      </div>
    </div>
  </div>
      ))}
</div>
</div>



  );
}

export default AnimalCardList;