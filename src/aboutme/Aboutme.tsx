import {SquareImage} from "./SquareImage";
import {Card, CardText, CardTitle} from "./Card";
import options from "../options";
import {useEffect, useState} from "react";
import "./Aboutme.scss"
import {SectionProps} from "../types";
import {getModuleData} from "../controllers/module_controller";

export function AboutMeBlock(props: Omit<SectionProps, "children">){
    let [contentJSON, setContent] = useState({
        image:"",
        card:{
            title:"Loading",
            content:[
                {
                    highlighted:false,
                    text:"Loading.."
                }
                ]
        }
    });


    useEffect(()=> {
        getModuleData("aboutme")
            .then(data=>setContent(data));
    }, []);
    let cardText = contentJSON.card.content.map((elem,index)=>{
        return(
            <CardText key={index+1} highlighted={elem.highlighted}>{elem.text}</CardText>
        );
    });
    let cardContent = [<CardTitle fontSize = "5" key = {0}>{contentJSON.card.title}</CardTitle>]
        .concat(cardText)
    let src = contentJSON.image;

    let className = props.className?props.className:"";
    className+=" section--bg--"+props.bg;

    return(
        <div className ={"section " + className}>
            <div className={"aboutme section__aboutme"}>
                <SquareImage size={"large"}
                             className = {"section__image"}
                             src={src===""?"":options.host+src}/>

                <Card size={"medium"} className={"aboutme__card"}>
                    {cardContent}
                </Card>
            </div>
        </div>
    );
}