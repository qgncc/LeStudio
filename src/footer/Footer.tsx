import {Props, StarsJSON} from "../types";
import {Section, SectionContent} from "../section/Section";
import Contacts from "../contacts/Contacts";
import "./Footer.scss";
import React from "react";
import {Card, CardText, CardTitle} from "../card/Card";
import Logo from "../logo/Logo";
import {useFetchData} from "../hooks/useFetchData";
import {Collage, CollageImg} from "../collage/Collage";
import {SquareImage} from "../squareimage/SquareImage";

export function Footer(props:Omit<Props, "children">) {
    
    let collageJSON = useFetchData("collage") as StarsJSON
    let elems = collageJSON.items.map((elem, index)=>
        <SquareImage
            size = "small"
            className="footer__img"
            key={index}
            alt={elem.alt}
            src={elem.src}/>);
    return(
      <Section bg={"darkGray"}>

          <SectionContent className="footer">
            <Card size="extraSmall" className="footer__card">
                <CardTitle fontSize="2"><Logo type="white"/></CardTitle>
                <CardText color="white">
                    На странице можно разместить описание своего опыта работы, как важно и дорого вам то, чем вы знимаетесь. С кем вы сотрудничаете, каких успехов добились.
                </CardText>
            </Card>
            <Contacts className="footer__contacts">
                <h1 className="footer__title">Контакты</h1>
                <><i className = "footer__icon uil uil-phone"/>+1(23)-45-67-890</>
                <><i className = "footer__icon uil uil-location-point"/>г. Москва, ул. Тверская, дом. 1</>
                <><i className = "footer__icon uil uil-skype-alt"/>ukitcom</>
                <><i className = "footer__icon uil uil-envelope"/>support@ukit.com</>
            </Contacts>
          <Collage className="footer__collage">
              {elems}
          </Collage>
          </SectionContent>

      </Section>
    );
}