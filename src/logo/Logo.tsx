import "./Logo.scss"
import logo from "../logo.svg";
import {Props} from "../types";



export default function Logo(props:Props) {
    let className = props.className?props.className:"";

    return(
        <img className = {"logo "+className} src={logo} alt=""/>
    );
}