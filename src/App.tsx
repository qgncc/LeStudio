import React, {ReactElement, useEffect, useState} from 'react';
import Header from "./header/Header";
import './App.css';
import Collection from "./collection/Collection";
import options from "./options";

function hashCode(str:string) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


function App() {


    let [images, setImages] = useState([{imgLink:"", text:""}]);
    async function fetchCollectionImages(){
        return fetch(
            options.host+"api/images/collection",
            { mode: 'cors',}
        ).then(res=>res.json())
    }
    useEffect(()=>{
        fetchCollectionImages().then((json)=>{
            console.log(json);
            setImages(json);
        });
    },[]);

    return (
        <div className="App">
        <Header/>
        <Collection items = {images}/>
        </div>
);
}

export default App;
