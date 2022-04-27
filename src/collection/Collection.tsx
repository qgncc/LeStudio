import "./Collection.scss";
import React, {useEffect, useState} from "react"
import {CollectionJSON, Props} from "../types";
import options from "../options";
import {getModuleData} from "../controllers/module_controller";
import {useFetchData} from "../hooks/useFetchData";



export default function Collection(props: Omit<Props,"children">) {
    let images = useFetchData("collection") as CollectionJSON

    let elements = images.items.map((item,index)=>{
        return(
            <div className="collection__item" key={index}>
                <img src={options.host+item.src}
                     className = "collection__img" alt={item.text}
                     />
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

