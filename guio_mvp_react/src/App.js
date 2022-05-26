import React, { useEffect, useState } from "react";
import "./App.css";
import AnimalCardList from './components/AnimalCardList';
import AnimalCardForm from "./components/AnimalCardForm";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  let [currentAnimalCard, setCurrentAnimalCard] = useState([]); 
  // let [filterAnimalCard, setFil]
  useEffect(() => {
    showAllAnimalCard();
      
    }, []);
  
  const filteredAnimalCard = (filter)=>{
      let query = ""
      if(filter.species){
        query += "&species="+filter.species
      }
      if(filter.race){
        query += "&race="+filter.race
      }
      if(filter.sex){
        query += "&sex="+filter.sex
      }
      if(filter.age){
        query += "&age="+filter.age
      }
      if(filter.castrate){
        query += "&castrate="+filter.castrate
      }
      if(filter.vaccinate){
        query += "&vaccinate="+filter.vaccinate
      }
      if(filter.joining){
        query += "&joining="+filter.joining
      }

      fetch("/animalcard?order=ASC&limit=15" + query)
      .then(response => response.json())
        .then(data => {
          setCurrentAnimalCard(data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
  const showAllAnimalCard = () =>{
    fetch("/animalcard?order=ASC&limit=7")
    .then(response => response.json())
      .then(data => {
        setCurrentAnimalCard(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  async function postAnimalCard(newAnimalCard) {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnimalCard)
    };

    try {
      let response = await fetch("/animalcard/animalcard", options);
      if (response.ok) {
        showAllAnimalCard();
      } else {
        console.log(`Server error: ${response.status}, ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  async function deleteAnimalCard(){}


  return (
    <div className="App">
      <h2>All of the animals</h2>
      <FilterButtons  filteredAnimalCardCb={filteredAnimalCard}/>
      <AnimalCardList CardListCb = {currentAnimalCard}/>

      <h3>Post a new pet friend</h3>
      <div><AnimalCardForm postAnimalCardCb = {postAnimalCard}/></div>
      
        
        
      
    </div>
  );
}


