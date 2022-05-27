import React, {useState} from "react";
import AnimalCardForm from "../components/AnimalCardForm";

function AdminView(){
    let [currentAnimalCard, setCurrentAnimalCard] = useState([]); 
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

    return(<>
    <h1 className="text-second "> AdminView</h1>
        <AnimalCardForm postAnimalCardCb = {postAnimalCard}/>
    </>
        
        )
}

export default AdminView;