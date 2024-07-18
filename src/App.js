import { useState } from "react";
import AnimalShow from "./AnimalShow";
import  './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'cow' ,'gator' ,'horse' ];
    return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

function App() {
    const [animals, setanimals] = useState([]);

    const handleClick = () => {
        setanimals([...animals , getRandomAnimal()])
    };
     
    const renderedAnemail = animals.map((animal , index)=>{
        return <AnimalShow  type={animal}   key={index} />
    })
    return (
        <div className="app">
            <button className="" onClick={handleClick}>Add Animal</button>
            <p className=""> and then click on heart </p>
            <div className="amimal-list"> {renderedAnemail} </div>
        </div>
    );
}

export default App;
