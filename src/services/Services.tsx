import "./Services.scss";
import {ServicesJSON,Props} from "../types";
import options from "../options";
import {Card, CardText, CardTitle} from "../card/Card";
import {useFetchData} from "../hooks/useFetchData";
import {Section, SectionContent} from "../section/Section";
import {Title} from "../title/Title";
//TODO: reorganize components;

export function ServicesBlock(props:Omit<Props, "children">) {
    let content = useFetchData("services") as ServicesJSON

    let elements = content.items.map((item,index)=>{

       return(
           <Card className="services__card" size={"small"} key = {index}>
               <img className="services__img" alt = "Example" src={options.host+item.image.src}/>
               <div className="services__text">
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
            <SectionContent className="services">
                <Title>Услуги</Title>
                {elements}
            </SectionContent>
        </Section>
    )
}