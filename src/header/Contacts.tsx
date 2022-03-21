import "./Contacts.scss";
import {Props} from "../types";

export default function Contacts (props:Props) {
    return(
            <ul className = {"contacts "+ props.className}>
                {
                    //since list is static i'll use indexes as keys
                    props.children?.map((item:JSX.Element|string, index)=>

                    <li key = {index} className="contacts__items">{item}</li>)
                }
            </ul>
    );
}