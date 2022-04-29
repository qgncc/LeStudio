import "./Collage.scss"
import {Props} from "../types";
import {ReactNode} from "react";
import options from "../options";

interface CollageImgProps{
    src:string,
    alt:string
}
interface CollageProps extends Props{
    children: ReactNode[]|ReactNode;
}

export function Collage(props:Props) {
    let elems = [];
    if(props.children && Array.isArray(props.children)) {
        let row = [];
        for (let i = 0; i < props.children.length; i++) {
            row.push(props.children[i]);
            if((i+1)%3 === 0){
                elems.push(<div key={i} className="collage__row">{row}</div>);
                console.log();
                row = [];
            }
        }
        if(row.length !== 0){
            elems.push(<div key={row.length} className="collage__row">{row}</div>);
        }
    }else{
        elems = [props.children]
    }
    let className = props.className !== undefined?props.className:"";
    return(
        <div className ={"collage " + className}>
            {elems}
        </div>
    )
}

export function CollageImg(props:CollageImgProps){
    return(
        <img className = "collage__img" src={options.host+props.src} alt={props.alt}/>
    );
}