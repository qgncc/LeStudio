import "./SquareImage.scss";
import {Props} from "../types";
import loadImg from "../img/loading.svg";

interface SquareImageProps extends Omit<Props, "children">{
    src:string,
    alt: string
    size:"small"|"medium"|"large"|"responsive",
}


export function SquareImage(props: SquareImageProps) {
    let className = props.className === undefined? "": props.className;
    className+= props.size? " squareImage--size--"+props.size: "";
    return(
        props.src === ""?
                <div className ={"squareImage "+className} style={{backgroundImage:"url("+loadImg+")"}}/>
                :
                <div className ={"squareImage "+className} style={{backgroundImage: "url(" + props.src + ")"}}/>
    );
}