import "./Contacts.scss";
import {Props} from "../types";

export default function Contacts (props:Props) {
    let children = Array.isArray(props.children)?props.children:[props.children];
    return(
            <ul className = {"contacts "+ props.className}>
                {
                    //since list is static i'll use indexes as keys
                    children.map((item, index)=>

                    <li key = {index} className="contacts__items">{item}</li>)
                }
            </ul>
    );
}