import {Props} from "../types";
import {Section, SectionContent} from "../section/Section";
import Contacts from "../contacts/Contacts";
import "./Footer.scss";
import React from "react";
import {Card, CardText, CardTitle} from "../card/Card";
import Logo from "../logo/Logo";

export function Footer(props:Omit<Props, "children">) {
    return(
      <Section bg={"darkGray"}>

          <SectionContent className="footer">
            <Card size="extraSmall">
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
          </SectionContent>
      </Section>
    );
}