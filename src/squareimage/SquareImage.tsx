import "./SquareImage.scss";
import {Props} from "../types";

interface SquareImageProps extends Omit<Props, "children">{
    src:string,
    size:"small"|"medium"|"large",
}


export function SquareImage(props: SquareImageProps) {
    let className = props.className === undefined? "": props.className;
    className+= " squareImage--size--"+props.size;
    return(
        <img src={props.src}
             className ={"squareImage "+ className}/>
    );
}