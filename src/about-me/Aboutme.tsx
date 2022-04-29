import {Card, CardText, CardTitle} from "../card/Card";
import options from "../options";
import "./Aboutme.scss"
import {AboutMeBlockJSON, Props} from "../types";
import {useFetchData} from "../hooks/useFetchData";
import {Section, SectionContent} from "../section/Section";
import {SquareImage} from "../squareimage/SquareImage";

export function AboutMeBlock(props: Omit<Props, "children">){
    let contentJSON = useFetchData("aboutme") as AboutMeBlockJSON;
    let cardText = contentJSON.card.content.map((elem, index) => {
        return (
            <CardText key={index + 1} highlighted={elem.highlighted}>{elem.text}</CardText>
        );
    });
    let cardContent = [<CardTitle fontSize="5" key={0}>{contentJSON.card.title}</CardTitle>]
        .concat(cardText)
    let src = contentJSON.image;


    let className = props.className?props.className:"";

    return(
        <Section bg="lightGray">
            <SectionContent>
                <div className={"aboutme "+className}>
                    <SquareImage
                        className = {"aboutme__img"}
                        src={src===""?"":src}
                        size = "large"
                        alt = "Me"/>

                    <Card size={"medium"} className={"aboutme__card"}>
                        {cardContent}
                    </Card>
                </div>
            </SectionContent>
        </Section>
    );
}