import "./Nav.scss";
import {Props} from "../types";
import {useRef, useState} from "react";


export default function Nav(props:Props) {
    let [isOpen,setIsOpen] = useState(false);
    function onClick() {
        setIsOpen(!isOpen);
    }
    return(
        <nav className ={"nav " + props.className}>
            <div className={isOpen?"nav__links nav__links--open":"nav__links"}>
                {props.children}
            </div>
            <button onClick={onClick} className="nav__toggle_button">
                {
                    isOpen ? <i className="nav__icon uil uil-multiply"/> :
                             <i className="nav__icon uil uil-bars"/>
                }
            </button>
        </nav>
    );
}