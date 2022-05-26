import React, { useState } from "react";

function FilterButtons(props) {
  
  function handleFilter(event) {
    let animalFiltered = {
      sex: "M",

    };
    
    props.filteredAnimalCardCb(animalFiltered); 
    
  }
  

  return (<div className="">
    <h3>All our pet friends</h3>
    <div className="filters">

        <label>
          {" "}SPECIES:{" "}
          <select name="species"  onChange={e => handleFilter(e.species) } defaultValue={''}>
              <option value="cat" >Cat</option> 
              <option value="dog" >Dog</option>
          </select>
        </label>

        <label>
          {" "}SEX:{" "}
          <select name="sex"  onChange={e => handleFilter(e.sex) } defaultValue={''}>
              <option value="F" >Female</option> 
              <option value="M" >Male</option>
          </select>
        </label>

        <label>
          {" "}AGE:{" "}
          <select name="age"  onChange={e => handleFilter(e.age) } defaultValue={''}>
              <option value="1" >1</option> 
              <option value="2" >2</option>
              <option value="3" >3</option>
              <option value="4" >4</option>
              <option value="5" >5</option>
              <option value=">5" >{`>5`}</option>
          </select>
        </label>


        <label>
          {" "}CASTRATE:{" "}
          <select name="castrate"  onChange={e => handleFilter(e.castrate) } defaultValue={''}>
              <option value="0" >NO</option> 
              <option value="1" >YES</option>
          </select>
        </label>

        <label>
          {" "}VACCINATE:{" "}
          <select name="vaccinate"  onChange={e => handleFilter(e.vaccinate) } defaultValue={''}>
              <option value="0" >NO</option> 
              <option value="1" >YES</option>
          </select>
        </label>

    </div>

    </div>
  );
}

export default FilterButtons;