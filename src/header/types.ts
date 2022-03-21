import {ReactElement} from "react";

export interface Props{
    className?: string;
    children?: ReactElement[]|ReactElement;
}
export interface ContactsProps extends Props{
    items: (JSX.Element|string)[]
}