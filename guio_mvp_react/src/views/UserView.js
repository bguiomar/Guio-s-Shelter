import React, {useState,useEffect} from "react";
import AnimalCardList from "../components/AnimalCardList";
import FilterButtons from "../components/FilterButtons";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserView(){
    const [currentAnimalCard, setCurrentAnimalCard] = useState([]); 
  // let [filterAnimalCard, setFil]
    useEffect(() => {
        showAllAnimalCard(); 
        }, []);

    const showAllAnimalCard = () =>{
        fetch("/animalcard?order=ASC&limit=15")
        .then(response => response.json())
        .then(data => {
         setCurrentAnimalCard(data);
      })
        .catch(error => {
        console.log(error);
      });
    };    

    const filteredAnimalCard = (filter)=>{
        let query = ""
        console.log(filter)
        if(filter.species != "all"){
          query += "&species="+filter.species
        }
        if(filter.race != "all"){
          query += "&race="+filter.race
            }
            if(filter.sex != "all"){
              query += "&sex="+filter.sex
            }
            if(filter.minage){
              query += "&minage="+filter.minage
            }
            if(filter.maxage){
              query += "&maxage="+filter.maxage
            }
            if(filter.castrate != "all"){
              query += "&castrate="+filter.castrate
            }
            if(filter.vaccinate != "all"){
              query += "&vaccinate="+filter.vaccinate
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

    return(
    <div className="Userview container-fluid"> 
        <div className="row">
          <div className="col-2">
          <FilterButtons  filteredAnimalCardCb={filteredAnimalCard}/>
          </div>
  
          <div className="col-10"><AnimalCardList CardListCb = {currentAnimalCard}/> 
          </div>
        </div>  
      </div>
    )
}

export default UserView;