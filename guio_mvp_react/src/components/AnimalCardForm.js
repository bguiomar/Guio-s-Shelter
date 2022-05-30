import React, { useState } from "react";
import "./AnimalCardList.css";

const EMPTY_FORM = {
    petName: "" ,
    species: "dog",
    race: "",
    sex: "Female", 
    chipNumber: "", 
    age: "",
    castrate: 0, 
    vaccinate: 0,
    petDescription: "" 
  };
  
  function AnimalCardForm(props) {
    const [newAnimalCard, setNewAnimalCard] = useState(EMPTY_FORM);
    const [file, setFile] = useState([]);

    function handleChange(event) {
      let { name, value } = event.target;
      setNewAnimalCard(animalCard => ({ ...animalCard, [name]: value }));
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      let newAnimal = newAnimalCard;
      newAnimal.joining = new Date().toISOString().slice(0,12); //we modify the date format
      props.postAnimalCardCb(newAnimal,file); 
      setNewAnimalCard(EMPTY_FORM);
    }
  
    function imageHandler(event) {
        const file = event.target.files[0];
        setFile(file);
    }

    return (
        // <div className="potato">
        //     <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
        //     <form  className ="banana" onSubmit={e => handleSubmit(e)}>
        //         <label>
        //         {" "}  Name:{" "}
        //         <input
        //             type="text"
        //             name="petName"
        //             value={newAnimalCard.petName}
        //             onChange={e => handleChange(e)}
        //         />
        //         </label>
        
        //         <label>
        //         {" "}  Species:{" "}
        //         <select name="species"  onChange={e => handleChange(e) } defaultValue={'dog'}>
        //             <option value="cat" >Cat</option> 
        //             <option value="dog" >Dog</option>
        //         </select>
        //         </label>
        //         <label>

        //         {" "} Race:{" "}
        //         <input
        //             type="text"
        //             name="race"
        //             value={newAnimalCard.race}
        //             onChange={e => handleChange(e)}
        //         />
        //         </label>

        //         <label>
        //         {" "}Sex:{" "}
        //         <select name="sex"  onChange={e => handleChange(e) } defaultValue={'Female'}>
        //             <option value="Female" >Female</option> 
        //             <option value="Male" >Male</option>
        //         </select>
        //         </label>
                
        //         <label>
        //         {" "}chipNumber:{" "}
        //         <input
        //             type="number"
        //             name="chipNumber"
        //             value={newAnimalCard.chipNumber}
        //             onChange={e => handleChange(e)}
        //         />
        //         </label>

        //         <label>
        //         {" "}age:{" "}
        //         <input
        //             type="number"
        //             name="age"
        //             value={newAnimalCard.age}
        //             onChange={e => handleChange(e)}
        //         />
        //         </label>

        //         <label>
        //         {" "}castrate:{" "}
        //         <select name="castrate"  onChange={e => handleChange(e) } defaultValue={'0'}>
        //             <option value="0" >No</option> 
        //             <option value="1" >Yes</option>
        //         </select>
        //         </label>

        //         <label>
        //         {" "}vaccinate:{" "}
        //         <select name="vaccinate"  onChange={e => handleChange(e) } defaultValue={'0'}>
        //             <option value="0" >No</option> 
        //             <option value="1" >Yes</option>
        //         </select>
        //         </label>

        //         <label>
        //         {" "}petDescription:{" "}
        //         <textarea
        //             type="text"
        //             name="petDescription"
        //             value={newAnimalCard.petDescription}
        //             onChange={e => handleChange(e)}
        //         />
        //         </label>

        //         <button className="btn btn-primary" type="submit">
        //         Submit
        //         </button>
        //     </form>
        // </div>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
            <input type="file" name="image" className="mt-2 mb-4" accept="image/*" multiple={false} onChange={imageHandler} />

            <form  onSubmit={e => handleSubmit(e)}> 
                <div className="d-flex align-items-center mb-1 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4 text-primary"> Add new animal</span>
                </div>
                <hr/>
                <ul className="nav nav-pills flex-column mb-2">
                    
                        <li className="nav-item">
                            <h6 className="mt-2 mb-2">Name</h6>
                            <form className="ml-md-2">
                            <div className="form-inline p-sm-2 my-2">
                                    <input
                                    type="text"
                                    name="petName"
                                    value={newAnimalCard.petName}
                                    onChange={e => handleChange(e)}
                                    />
                                </div>
                            </form>    
                        </li>
                   

                   
                        <li className="nav-item">
                            <h6 className="mt-3 mb-2">Species</h6>
                            <form className="ml-md-2">
                            <div className="form-inline p-sm-2 my-2">
                                    <select name="species"  onChange={e => handleChange(e) } defaultValue={'dog'}>
                                        <option value="cat" >Cat</option> 
                                        <option value="dog" >Dog</option>
                                    </select>
                                </div>
                            </form>    
                        </li>
            
                    
                    <li className="nav-item">
                        <h6 className="mt-2 mb-2">Race</h6>
                        <form className="ml-md-2">
                        <div className="form-inline p-sm-2 my-2">
                                <input
                                type="text"
                                name="race"
                                value={newAnimalCard.race}
                                onChange={e => handleChange(e)}
                                />
                            </div>
                        </form>    
                    </li>
                    
                    <li className="nav-item">
                        <h6 className="mt-3 mb-2">Sex</h6>
                        <form className="ml-md-2">
                        <div className="form-inline p-sm-2 my-2">
                                <select name="sex"  onChange={e => handleChange(e) } defaultValue={'Female'}>
                                    <option value="female" >Female</option> 
                                    <option value="male" >Male</option>
                                </select>
                            </div>
                        </form>    
                    </li>
        
                    <li className="nav-item">
                        <h6 className="mt-2 mb-2">Chip Number</h6>
                        <form className="ml-md-2">
                            <div className="form-inline p-sm-2 my-2">
                                <input
                                type="text"
                                name="chipNumber"
                                value={newAnimalCard.chipNumber}
                                onChange={e => handleChange(e)}
                                />
                            </div>
                        </form>    
                    </li>
        
                    <li className="nav-item">
                        <h6 className="mt-2 mb-2">Age</h6>
                        <form className="ml-md-2">
                        <div className="form-inline p-sm-2 my-2">
                                <input
                                type="text"
                                name="age"
                                value={newAnimalCard.age}
                                onChange={e => handleChange(e)}
                                />
                            </div>
                        </form>    
                    </li>
        
                    <li className="nav-item">
                        <h6 className="mt-3 mb-2">Castrate</h6>
                        <form className="ml-md-2">
                            <div className="form-inline p-sm-2 my-2">
                                <select name="castrate"  onChange={e => handleChange(e) } defaultValue={'Female'}>
                                <option value="0" >No</option> 
                                <option value="1" >Yes</option>
                                </select>
                            </div>
                        </form>    
                    </li>
        
                    <li className="nav-item">
                        <h6 className="mt-3 mb-2">Vaccinate</h6>
                        <form className="ml-md-2">
                            <div className="form-inline p-sm-2 my-2">
                                <select name="vaccinate"  onChange={e => handleChange(e) } defaultValue={'0'}>
                                <option value="0" >No</option> 
                                <option value="1" >Yes</option>
                                </select>
                            </div>
                        </form>    
                    </li>
        
                    <li className="nav-item">
                        <h6 className="mt-2 mb-2">Description</h6>
                        <form className="ml-md-2">
                        <div className="form-inline p-sm-2 my-2">
                                <textarea
                                type="text"
                                name="petDescription"
                                className="py-5 px-4"
                                value={newAnimalCard.petDescription}
                                onChange={e => handleChange(e)}
                                />
                            </div>
                        </form>    
                    </li>
                <hr/>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </ul>
            </form>
        
        </div>
    

   
    );
  }
  
  export default AnimalCardForm;
  