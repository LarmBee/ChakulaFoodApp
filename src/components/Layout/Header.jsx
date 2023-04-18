import React from "react";
import './Header.css'
import meals from '../../assets/meals.jpg'
import HeaderCardButton from "./HeaderCardButton";


const Header = (props)=>{
    return (
        <>
            <header className="header">
                <h1>Chakula</h1>
                <HeaderCardButton/>
            </header>
            <div className="main-image">
                <img src={meals} alt="Fine dining table"/>
            </div>
        </>
    )
}

export default Header;