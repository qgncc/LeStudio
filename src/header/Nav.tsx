import "./Nav.scss";
import {Props} from "../types";

export default function Nav(props:Props) {
    return(
        <nav className ={"nav " + props.className}>
            {props.children}
        </nav>
    );
}