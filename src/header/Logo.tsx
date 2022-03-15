import "./Logo.scss"
import logo from "../logo.svg";
import {Props} from "../types";



export default function Logo(props:Props) {
    return(
        <img className = {"logo "+props.className} src={logo} alt=""/>
    );
}