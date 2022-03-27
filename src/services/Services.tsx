import "./Services.scss";
import {SectionProps} from "../types";
import {SquareImage} from "../aboutme/SquareImage";
import options from "../options";
import {useEffect, useState} from "react";
import {Card, CardText, CardTitle} from "../aboutme/Card";
import {getModuleData} from "../controllers/module_controller";
//TODO: reorganize components;

export function ServicesBlock(props:Omit<SectionProps, "children">) {
    let [content, setContent] = useState({
        items:[
            {
                image: {
                    src:"",
                    alt:"",
                },
                text: {
                    title:"",
                    content:"",
                }
            }
        ]
    });



    useEffect(()=>{
        getModuleData("services")
           .then(data=>setContent(data));
    },[])

    let elements = content.items.map((item,index)=>{

       return(
           <Card className={"section__card"} size={"min-content"} key = {index}>
               <SquareImage size="medium" src={options.host+item.image.src}/>
               <CardTitle fontSize="2">
                   {item.text.title}
               </CardTitle>
               <CardText>
                   {item.text.content}
               </CardText>
           </Card>
       )
    });

    let className = props.className?props.className:"";
    className+=" section--bg--"+props.bg;

    return(

        <section className={"section "+className}>
            <div className={"section__wrapper"}>
                <div className="section__header">Услуги</div>
                {elements}
            </div>
        </section>
    )
}