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


  return (
<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
    <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span className="fs-4">Filter by</span>
    </div>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
        <h6>Species</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="species" value="all" defaultChecked onChange={e => handleFilterChange(e) }/>
                <label  className="pl-1 pt-sm-0">All</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="species" value="cat" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0">Cat</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="species" value="dog" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0">Dog</label>
            </div>
        </form>
    </li>
      <li className="nav-item">

      <h6>Sex</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="sex" value="all" defaultChecked onChange={e => handleFilterChange(e) }/>
                <label  className="pl-1 pt-sm-0">All</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="sex" value="Female" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0 p">Female</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="sex" value="Male" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0">Male</label>
            </div>
        </form>
      </li>

      <li className="nav-item">
      <h6>Min age</h6>
      <input type="range" name="minage" min="0" max="20" defaultValue="0" onChange={e => handleFilterChange(e)}/>
          <input
              type="number"
              name="minage"
              value={filter.minage}
              onChange={e => handleFilterChange(e)}
                />
        </li>

        <li className="nav-item">
        <h6>Max age</h6>
      <input type="range" name="maxage" min="0" max="20" defaultValue="20" onChange={e => handleFilterChange(e)}/>
         
          <input
              type="number"
              name="maxage"
              value={filter.maxage}
              onChange={e => handleFilterChange(e)}
          />
        </li>

        <li className="nav-item">

        <h6>Castrate</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="castrate" value="all" defaultChecked onChange={e => handleFilterChange(e) }/>
                <label  className="pl-1 pt-sm-0">All</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="castrate" value="0" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0 p">No</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="castrate" value="1" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0">Yes</label>
            </div>
        </form>
      </li>


      

        <li className="nav-item">

        <h6>Vaccinate</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="vaccinate" value="all" defaultChecked onChange={e => handleFilterChange(e) }/>
                <label  className="pl-1 pt-sm-0">All</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="vaccinate" value="0" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0 p">No</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="vaccinate" value="1" onChange={e => handleFilterChange(e)}/>
                <label className="pl-1 pt-sm-0">Yes</label>
            </div>
        </form>
        </li>
        <hr/>
        <button className="btn btn-primary" type="button" onClick={handleFilter}>
                Apply filter
        </button>
    </ul>
    </div>
  );
}

export default FilterButtons;