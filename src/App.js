import searchImages from './api';
import SearchBaer from './Components/SearchBaer';
import ImgList from './Components/ImgList';
import { useState } from 'react';

function App() {
    const [images, setImages] = useState([]);


    const handelSubmit= async (term)=>{
   const result =  await searchImages(term);
   setImages(result);

    };
    return <div className="">
    <SearchBaer onSubmit={handelSubmit} />
    <ImgList images={images} />
    </div>;
}

export default App;
