import "./Collection.scss";
import React, {useState} from "react"
import {Props} from "../header/types";
import options from "../options";

interface CollectionProps extends Props{
    items:{imgLink: string, text:string}[];
}


export default function Collection(props: CollectionProps) {
    let items = props.items;

    let elements = items.map((element,index)=>{
        return(
            <div style={{backgroundImage:`url(${options.host+"images/collection/"+element.imgLink})`}}
                 className = "collection__item"
                 key={index}>
                <div className = "collection__text"> {element.text}</div>
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

