import React, { useState } from "react";

const EMPTY_FILTER = {
  species: "all",
  race: "all",
  sex: "all", 
  minage: 0,
  maxage: 20,
  castrate: "all", 
  vaccinate: "all",
};

function FilterButtons(props) {

  const [filter, setFilter] = useState(EMPTY_FILTER);

  
  function handleFilterChange(event) {
    let { name, value } = event.target;
    setFilter(filter => ({ ...filter, [name]: value }));
  }
  
  function handleFilter(){
    props.filteredAnimalCardCb(filter); 
  }


  return (<div className="">
    <h3>All our pet friends</h3>
    <div className="filters">

        <label>
          {" "}SPECIES:{" "}
          <select name="species"  onChange={e => handleFilterChange(e) } defaultValue={'all'}>
              <option value="all" >All</option> 
              <option value="cat" >Cat</option> 
              <option value="dog" >Dog</option>
          </select>
        </label>

        <label>
          {" "}SEX:{" "}
          <select name="sex"  onChange={e => handleFilterChange(e) } defaultValue={'all'}>
              <option value="all" >All</option>
              <option value="Female" >Female</option> 
              <option value="Male" >Male</option>
          </select>
        </label>

        <label>
          {" "}MIN AGE:{" "}
          <input
              type="number"
              name="minage"
              value={filter.minage}
              onChange={e => handleFilterChange(e)}
                />
        </label>
        <label>
          {" "}MAX AGE:{" "}
          <input
              type="number"
              name="maxage"
              value={filter.maxage}
              onChange={e => handleFilterChange(e)}
          />
        </label>

        <label>
          {" "}CASTRATE:{" "}
          <select name="castrate"  onChange={e => handleFilterChange(e) } defaultValue={'all'}>
              <option value="all" >All</option>
              <option value="0" >NO</option> 
              <option value="1" >YES</option>
          </select>
        </label>

        <label>
          {" "}VACCINATE:{" "}
          <select name="vaccinate"  onChange={e => handleFilterChange(e) } defaultValue={'all'}>
              <option value="all" >All</option>
              <option value="0" >NO</option> 
              <option value="1" >YES</option>
          </select>
        </label>
        <button className="btn btn-primary" type="button" onClick={handleFilter}>
                Filter
        </button>

    </div>

    </div>
  );
}

export default FilterButtons;