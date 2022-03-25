import "./Card.scss";
import {Props} from "../types";

interface CardTextProps extends Props{
    highlighted?: boolean,
}

export function Card(props:Props) {
    let className = props.className === undefined? "": props.className;

    return(
        <div className ={"card " + className}>
            {props.children}
        </div>
    )
}
export function CardText(props:CardTextProps) {
    let className = props.className === undefined? "": props.className;
    className+= props.highlighted? "card__text--highlighted":"";

    return(
        <p className ={"card__text " + className}>
            {props.children}
        </p>
    );
}
export function CardTitle(props:Props) {
    let className = props.className === undefined? "": props.className;
    return(
        <h1 className ={"card__title " + className}>
            {props.children}
        </h1>
    );
}