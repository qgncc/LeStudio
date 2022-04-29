import "./Logo.scss"
import logo from "../logo.svg";
import whiteLogo from "../logo_white.svg";
import {Props} from "../types";

interface LogoProps extends Props{
    type:"black"|"white";
}

export default function Logo(props:Omit<LogoProps,"children">) {
    let className = props.className?props.className:"";

    return(
        <img className = {"logo "+className}
             src={props.type ==="black"?logo:whiteLogo}
             alt="Logo"/>
    );
}