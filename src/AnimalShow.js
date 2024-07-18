import cow from './svg/cow.svg';
import bird from './svg/bird.svg'; 
import cat from './svg/cat.svg';   
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';
import './AnimalShow.css';
const svgMap = {
    cow,
    bird,
    cat,  
    dog,
    horse,
    gator
}

function AnimalShow({ type }) {
    const [clicks, setclicks] = useState(0);
    const handleClick =()=>{
        setclicks(clicks+1);

    };

    return (
        <div className="animal-show" onClick={handleClick} >
            <img className="animal" alt='animal' src={svgMap[type]} />
            <img className="heart" alt='hrart' src={heart} style={{ width:10 + 10 * clicks }}  />
        </div>
    );
}

export default AnimalShow;
