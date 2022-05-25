import React, { useEffect, useState } from "react";
import "./App.css";
import AnimalCardList from './components/AnimalCardList';
import AnimalCardForm from "./components/AnimalCardForm";

export default function App() {
  let [currentAnimalCard, setCurrentAnimalCard] = useState([]); 
  
  useEffect(() => {
    showAllAnimalCard();
      
    }, []);
  
    const filteredAnimalCard = (filter) =>{
      let query = ""
      if(filter.sex){
        // la misma idea que en el backend
        query += "&sex="+filter.sex
      }

      fetch("/animalcard?order=ASC&limit=10"+query)
      .then(response => response.json())
        .then(data => {
          setCurrentAnimalCard(data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
  const showAllAnimalCard = () =>{
    fetch("/animalcard?order=ASC&limit=10")
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



  return (
    <div className="App">
      <h2>All of the animals</h2>
      <AnimalCardList CardListCb = {currentAnimalCard}/>

      <h3>Post a new pet friend</h3>
      <AnimalCardForm postAnimalCardCb = {postAnimalCard}/>
      
        
        
      
    </div>
  );
}


