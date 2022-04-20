import Contacts from "../contacts/Contacts";
import Nav from "../nav/Nav";
import Logo from "../logo/Logo";
import React from "react";
import "./Header.scss";

export default function Header (...props:any) {

    return(
        <header className = "header">
            <Contacts className= "header__contacts header__contacts--theme--main">
                <><i className = "icon uil uil-phone"/>+1(23)-45-67-890</>
                <><i className = "icon uil uil-location-point"/>г. Москва, ул. Тверская, дом. 1</>
                <><i className = "icon uil uil-skype-alt"/>ukitcom</>
                <><i className = "icon uil uil-envelope"/>support@ukit.com</>

            </Contacts>
            <Logo className = "logo header__logo logo--size--medium"/>
            <Contacts className= "header__social header__contacts--font--size--medium">
                <a href="#"><i className = "icon uil uil-telegram"/></a>
                <a href="#"><i className = "icon uil uil-vk"/></a>
                <a href="#"><i className = "icon uil uil-twitter"/></a>
            </Contacts>

            <Nav className = "header__nav nav--theme-main">
                <a href="#" className="nav__link">Главная</a>
                <a href="#" className="nav__link">О нас</a>
                <a href="#" className="nav__link">Услуги</a>
                <a href="#" className="nav__link">Коллекция</a>
                <a href="#" className="nav__link">Новости</a>
                <a href="#" className="nav__link">Контакты</a>
            </Nav>

        </header>
    );
}