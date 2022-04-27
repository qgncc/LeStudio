import "./Nav.scss";
import {Props} from "../types";
import {useRef, useState} from "react";
import {MutableRefObject} from "react";


export default function Nav(props:Props) {
    let [isOpen,setIsOpen] = useState(false);
    let ref = useRef<HTMLDivElement>(null);
    function onClick() {
        if(!ref || !ref.current) return;
        ref.current.classList.toggle("nav__links--open");
    }
    return(
        <nav className ={"nav " + props.className}>
            <div ref={ref} className="nav__links">
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