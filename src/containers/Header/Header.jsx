import './Header.scss'
import {Link} from "react-router-dom";
import burgerButton from '../../assets/images/icons/burger-button.svg'
import {useTranslation} from "react-i18next";
import {useState} from "react";
import uzbFlag from '../../assets/images/uzb.png'
import ruFlag from '../../assets/images/rus.png'

const Header = ({mobileMenu, setMobileMenu, language, setLanguage}) => {


    const {t, i18n} = useTranslation();

    const languageChanger = () =>{
        if(language === 'uz'){
            i18n.changeLanguage('ru')
            setLanguage('ru')
        } else{
            i18n.changeLanguage('uz')
            setLanguage('uz')
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-left">
                    <Link  to='/' className='logo' >
                        296-XIKMK
                    </Link>
                </div>
                <button className="burger-button" onClick={event => setMobileMenu(!mobileMenu)} >
                    <img src={burgerButton} alt=""/>
                </button>
                <div className="header-center">
                    <ul className="header-center-linkers">
                        <li>
                            <Link to='/' >
                                {t("header.home")}
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' >
                                {t("header.about")}
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog' >
                                {t("header.blog")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <button onClick={languageChanger} className='language-button' >
                        {
                            language === 'uz' ? (
                               <>
                                   <img src={uzbFlag} alt=""/>uz
                               </>
                            ) : (
                                <>
                                    <img src={ruFlag} alt=""/>ru
                                </>
                            )
                        }
                    </button>
                    <a href="tel: +998977777777">
                        {t("header.call")}
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header