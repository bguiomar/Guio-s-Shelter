import React from "react";
import AnimalCardList from "../components/AnimalCardList";
import FilterButtons from "../components/FilterButtons";

function UserView(){
    
    return(
        <div className="Userview"> 
        <h1> UserView</h1>
        <FilterButtons  filteredAnimalCardCb={filteredAnimalCard}/>
        <AnimalCardList CardListCb = {currentAnimalCard}/>
        </div>
    )
}

export default UserView;