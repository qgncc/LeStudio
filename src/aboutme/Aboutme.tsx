import {SquareImage} from "./SquareImage";
import {Card, CardText, CardTitle} from "./Card";
import options from "../options";
import {useEffect, useState} from "react";
import "./Aboutme.scss"



export function AboutMeBlock(){
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


    async function fetchImage() {
        let data = await fetch(options.host+"api/module/aboutme")
        let json = await data.json();
        setContent(json);
    }
    useEffect(()=> {
        fetchImage()
    }, []);
    let cardText = contentJSON.card.content.map((elem,index)=>{
        return(
            <CardText key={index+1} highlighted={elem.highlighted}>{elem.text}</CardText>
        );
    });
    let cardContent = [<CardTitle key = {0}>{contentJSON.card.title}</CardTitle>]
        .concat(cardText)
    let src = contentJSON.image;

    return(
        <div className = "section">
            <SquareImage size={"medium"} className = {"about__image"}src={src===""?"":options.host+src}/>
            <Card className={"about__card"}>
                {cardContent}
            </Card>
        </div>
    );
}