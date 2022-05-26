import React, { useState } from "react";

function FilterButtons(props) {
  function handleFilter(event) {
    event.preventDefault();
    let animalFiltered = {
      sex: "M",

    };
    
    props.filteredAnimalCardCb(animalFiltered); 
    
  }

  return (<div className="">
    <h3>All our pet friends</h3>
      <button onClick={e=>handleFilter(e)}
      className="AnimalCard2">
        </button>
    </div>
  );
}

export default FilterButtons;