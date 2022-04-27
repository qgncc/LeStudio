import {Props, SectionProps} from "../types";
import "./Section.scss";


export function Section(props:SectionProps) {
    let className = props.className?props.className:"";
    className+=" section--bg--"+props.bg;
    return(
        <section className={"section " + className}>
            {props.children}
        </section>
    );
}

export function SectionContent(props:Props) {
    let className = props.className?props.className:"";
    return(
        <div className={"section__content " + className}>
            {props.children}
        </div>
    );
}
