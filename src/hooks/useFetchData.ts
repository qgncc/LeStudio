import {useEffect, useState} from "react";
import {getModuleData} from "../controllers/module_controller";
import {AboutMeBlockJSON, CollectionJSON, Modules, ServicesJSON, StarsJSON} from "../types";

export function useFetchData(module:Modules){
    let beforeLoadingContent:AboutMeBlockJSON|ServicesJSON|StarsJSON|CollectionJSON;
    if(module === "aboutme"){
        beforeLoadingContent= {
            card:{
                title:"Loading...",
                content:[{
                    highlighted:false,
                    text:"Loading..."
                }]
            },
            image:""
        }
    }else if(module === "services"){
        beforeLoadingContent = {
            items: [{
                image: {
                    src: "",
                    alt: "loading",
                },
                text: {
                    title: "Loading...",
                    content: "Loading...",
                }
            }]
        }
    }else if(module === "reviews"){
        beforeLoadingContent = {
            items: [{
                image: {
                    src: "",
                    alt: "loading",
                },
                text: {
                    title: "Loading...",
                    content: "Loading...",
                }
            }]
        }
    }else if(module === "stars"){
        beforeLoadingContent ={
            items:[
                {
                    src:"",
                    alt:"Loading",
                }
            ]
        }
    }else if(module === "collage"){
        beforeLoadingContent = {
            items: [
                {
                    src: "../img/loading.svg",
                    text: "Loading..."
                }
            ]
        }
    }else if(module === "collection"){
        beforeLoadingContent ={
            items:[
                {
                    src: "../img/loading.svg",
                    text: "Loading..."
                }
            ]
        }
    }else{
        throw new Error("Wrong module type")
    }
    let [contentJSON, setContent] = useState(beforeLoadingContent);

    useEffect(() => {
        getModuleData(module)
            .then(data => setContent(data));
    }, []);
    return contentJSON;
}