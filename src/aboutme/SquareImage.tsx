import "./SquareImage.scss";
import {Props} from "../types";

interface SquareImageProps extends Omit<Props, "children">{
    src:string
}


export function SquareImage(props: SquareImageProps) {
    let className = props.className === undefined? "": props.className;

    return(
        <div style={{backgroundImage:`url(${props.src})`}}
             className ={"squareImage "+ className}/>
    );
}