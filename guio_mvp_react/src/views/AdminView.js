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

    function postImage(animalId, file){
      const formData = new FormData();
      formData.append('image',file);
      formData.append('animalId',animalId);

      let options = {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'multipart/form-data', },
      };

      fetch("/images", options)
      .catch(error => {console.log(error)});
    }

    async function postAnimalCard(newAnimalCard,file) {
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAnimalCard)
        };
          fetch("/animalcard/animalcard", options)
          .then(response => response.json())
          .then(data => {
              postImage(data.data[0].id, file);
              showAllAnimalCard();
            }
          ).catch(error => {console.log(error)});

         /* let response = await fetch("/animalcard/animalcard", options);
          console.log(response.json())
          if (response.ok) {
            await postImage(, file);
            showAllAnimalCard();
          } else {
            console.log(`Server error: ${response.status}, ${response.statusText}`);
          }
        } catch (error) {
          console.log(`Network error: ${error.message}`);
        }*/
      };

    return(<>
    <h1 className="text-second "> AdminView</h1>
        <AnimalCardForm postAnimalCardCb = {postAnimalCard}/>
    </>
        
        )
}

export default AdminView;