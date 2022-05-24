import logo from './logo.svg';
import './App.css';

export default function App() {
  let [allAnimalCard, setAllAnimalCard] = useState([]);

  useEffect(() => {
    mounted_AllAnimalCard();
      
    }, []);
  
  
  const mounted_AllAnimalCard = () =>{
    fetch("/animalcards")
    .then(response => response.json())
      .then(data => {
        setAllAnimalCard(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  return (
    <div className="App">
      
        
        
      holaaa
    </div>
  );
}

export default App;
