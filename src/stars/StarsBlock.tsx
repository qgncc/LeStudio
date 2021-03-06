import "./StarsBlock.scss";
import {SquareImage} from "../squareimage/SquareImage";
import options from "../options";
import Logo from "../logo/Logo";
import {Props, StarsJSON} from "../types";
import {Section, SectionContent} from "../section/Section";
import {useFetchData} from "../hooks/useFetchData";
import {Title} from "../title/Title";



export function StarsBlock(props:Omit<Props, "children">) {
    let content = useFetchData("stars") as StarsJSON;

    let elements = content.items.map((element, index)=>{
        return(
            //TODO key = hash(src)
                <SquareImage size="medium"
                             className = "stars__img"
                             alt="Star" key={index}
                             src={element.src}/>
        );
    });

    let className = props.className?props.className:"";

    return(
        <Section  bg="lightGray">
            <SectionContent className = {"stars "+className}>
                <Title className = "stars__title">
                    Звезды в одежде <Logo type="black" className="section__logo logo--size--medium"/>
                </Title>
                <div className="stars__images">
                    {elements}
                </div>
            </SectionContent>
        </Section>
    );
}