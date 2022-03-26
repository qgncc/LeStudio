import "./Collection.scss";
import React, {useEffect, useState} from "react"
import {Props} from "../header/types";
import options from "../options";
import {getModuleData} from "../controllers/module_controller";



export default function Collection(props: Omit<Props,"children">) {
    let [images, setImages] = useState({
        items:[
            {
                src: "",
                text: ""
            }
        ]
    });



    useEffect(()=>{
        getModuleData("collection")
            .then(data=>setImages(data));
    },[]);

    let elements = images.items.map((item,index)=>{
        return(
            <div style={{backgroundImage:`url(${options.host+item.src})`}}
                 className = "collection__item"
                 key={index}>
                <div className = "collection__text"> {item.text}</div>
            </div>

        );
    })


    return(
        <section className ={"collection "+ props.className}>
            <div className="collection__view">
                {elements}
            </div>
        </section>
    );
}

