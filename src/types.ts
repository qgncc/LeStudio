import {ReactNode} from "react";

export interface Props{
    className?: string;
    children?: ReactNode[]|ReactNode;
}
export interface SectionProps extends Props{
    bg:"white"|"lightGray";
}
