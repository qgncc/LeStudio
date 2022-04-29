import "./Reviews.scss";
import {ServicesJSON, Props, ReviewsJSON} from "../types";
import options from "../options";
import {Card, CardText, CardTitle} from "../card/Card";
import {useFetchData} from "../hooks/useFetchData";
import {Section, SectionContent} from "../section/Section";
import {Title} from "../title/Title";
import {SquareImage} from "../squareimage/SquareImage";
//TODO: reorganize components;

export function ReviewsBlock(props:Omit<Props, "children">) {
    let content = useFetchData("reviews") as ReviewsJSON

    let elements = content.items.map((item,index)=>{

       return(
           <Card className="reviews__card" size={"small"} key = {index}>
               <SquareImage size="medium" className="reviews__img" alt = "Example" src={item.image.src}/>
               <div className="reviews__text">
                   <CardTitle color = "black" fontSize="2">
                       {item.text.title}
                   </CardTitle>
                   <CardText color = "black">
                       {item.text.content}
                   </CardText>
               </div>
           </Card>
       )
    });

    let className = props.className?props.className:"";

    return(

        <Section bg="white">
            <SectionContent className="reviews">
                <Title>Отзывы</Title>
                {elements}
            </SectionContent>
        </Section>
    )
}