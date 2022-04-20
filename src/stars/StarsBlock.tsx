import "./StarsBlock.scss";
import {useEffect, useState} from "react";
import {getModuleData} from "../controllers/module_controller";
import {SquareImage} from "../squareimage/SquareImage";
import options from "../options";
import Logo from "../logo/Logo";
import {SectionProps} from "../types";
//TODO make custom hooks for fetching data;



export function StarsBlock(props:Omit<SectionProps, "children">) {
    let [content, setContent] = useState(
{
            items:[
                {
                    src:"",
                    alt:""
                }
            ]
        }
    );


    useEffect(()=>{
       getModuleData("stars")
           .then((data)=>setContent(data));
    },[])

    let elements = content.items.map((element, index)=>{
        return(
            //TODO key = hash(src)
            <SquareImage className="section__card" key={index} src={options.host+element.src} size={"small"}/>
        );
    });

    let className = props.className?props.className:"";
    className+=" section--bg--"+props.bg;

    return(
        <div className={"section "+className}>
            <div className={"section__wrapper"}>
                <h1 className = "section__header">
                    <div className={"section__title"}>Звезды в одежде
                        <Logo className={"logo section__logo logo--size--medium"}/>
                    </div>
                </h1>
                {elements}
            </div>
        </div>
    );
}