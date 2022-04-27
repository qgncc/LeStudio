import {Props} from "../types";
import "./Title.scss";

export function Title(props:Props) {
    let className = props.className?props.className:"";
    return(
        <div className={"title " + className}>
            <div className="title__text">
                {props.children}
            </div>
        </div>
    );
}