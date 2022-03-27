import React from 'react';
import Header from "./header/Header";
import './App.css';
import Collection from "./collection/Collection";
import {AboutMeBlock} from "./aboutme/Aboutme";
import {ServicesBlock} from "./services/Services";
import {StarsBlock} from "./stars/StarsBlock";

// function hashCode(str:string) {
//     let hash = 0, i, chr;
//     if (str.length === 0) return hash;
//     for (i = 0; i < str.length; i++) {
//         chr   = str.charCodeAt(i);
//         hash  = ((hash << 5) - hash) + chr;
//         hash |= 0; // Convert to 32bit integer
//     }
//     return hash;
// }


function App() {

    return (
        <div className="App">
            <Header/>
            <Collection/>
            <AboutMeBlock bg="lightGray"/>
            <ServicesBlock bg="white"/>
            <StarsBlock bg="lightGray"/>
        </div>
);
}

export default App;
