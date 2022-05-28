import React from "react";
import "./AnimalCardList.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


function Castrate(props) {
  if(props.castrate === 0){
    return <p>No castrated</p>
  }
  return <p>Castrated</p>
}
function Vaccinate(props) {
  if(props.vaccinate === 0){
    return <p>No vaccinated</p>
  }
  return <p>Vaccinated</p>
}

function Description(props){
  if (props.petDescription.length <= 100){
    return <p>{props.petDescription}</p>
  }
  return <p>{props.petDescription.slice(0,100)}...</p>
}


function Card(props){
  return(
    <div className="card" >
    <img className="card-img-top" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.petName}</h5>
      <p className="card-text">{Description(props)}</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item mb-3">{props.age} years old.</li>
        <li className="list-group-item">{Vaccinate(props)}</li>
        <li className="list-group-item">{Castrate(props)}</li>
    </ul>
      <a href="google.es" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}




function AnimalCardList(props) {
  return (
<div className="container-fluid my-4 p-3" style={{position: "relative"}}>
<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
  
  {
    props.CardListCb.map(a => (
        <div className="col mb-4" key={a.id}>
          {Card(a)} 
        </div>
      ))}
</div>
</div>



  );
}

export default AnimalCardList;