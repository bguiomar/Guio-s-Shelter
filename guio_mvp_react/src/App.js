import React, { useEffect, useState } from "react";
import "./App.css";
import AnimalCardList from './components/AnimalCardForm';
import AnimalCardForm from "./components/AnimalCardForm";

export default function App() {
  let [allAnimalCard, setAllAnimalCard] = useState([]);

  useEffect(() => {
    showAllAnimalCard();
      
    }, []);
  
  
  const showAllAnimalCard = () =>{
    fetch("/animalcard")
    .then(response => response.json())
      .then(data => {
        setAllAnimalCard(data);
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
        let data = await response.json();
        setAllAnimalCard(data);
      } else {
        console.log(`Server error: ${response.status}, ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  return (
    <div className="App">
      <AnimalCardList allAnimalCardListCb ={allAnimalCard}/>
      <AnimalCardForm postAnimalCardCb={postAnimalCard}/>
        
        
      
    </div>
  );
}


