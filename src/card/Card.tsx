import "./Card.scss";
import {Props} from "../types";

interface CardTextProps extends Props{
    color?:"white"|"black";
    highlighted?: boolean,
}
interface CardTitleProps extends Props{
    fontSize: "1"|"2"|"3"|"4"|"5",
    color?:"white"|"black"|"orange";
}
interface CardProps extends Props{
    size:"extraSmall"|"small"|"medium"|"large"|"min-content";

}


export function Card(props:CardProps) {
    let className = props.className === undefined? "": props.className;
    className+=" card--size--"+props.size
    return(
        <div className ={"card " + className}>
            {props.children}
        </div>
    )
}
export function CardText(props:CardTextProps) {
    let className = props.className === undefined? "": props.className;
    className+= props.highlighted? "card__text--highlighted":"";
    className+= props.color?" card__text--color--"+props.color:"";


    return(
        <p className ={"card__text " + className}>
            {props.children}
        </p>
    );
}
export function CardTitle(props:CardTitleProps) {
    let className = props.className === undefined? "": props.className;
    className+= " card__title--fontSize--"+props.fontSize;
    className+= props.color?" card__text--color--"+props.color:"";

    return(
        <h1 className ={"card__title " + className}>
            {props.children}
        </h1>
    );
}