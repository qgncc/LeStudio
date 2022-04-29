import {ReactNode} from "react";

export interface Props{
    className?: string;
    children?: ReactNode[]|ReactNode;
}
export interface SectionProps extends Props{
    bg:"white"|"lightGray"|"darkGray";
}

export interface AboutMeBlockJSON{
    card:{
            title: string,
            content:{
                highlighted:boolean,
                text:string
            }[]
        },
    image:string
}
export interface ServicesJSON{
    items: {
                image: {
                    src:string,
                    alt:string,
                },
                text: {
                    title:string,
                    content:string,
                }
            }[]
}
export interface ReviewsJSON{
    items: {
                image: {
                    src:string,
                    alt:string,
                },
                text: {
                    title:string,
                    content:string,
                }
            }[]
}
export interface StarsJSON{
    items:{
            src:string,
            alt:string
        }[]

}
export interface CollectionJSON{
    items:{
            src: string,
            text: string
    }[]
}
export type Modules = "reviews"|"aboutme"|"services"|"collection"|"stars";
