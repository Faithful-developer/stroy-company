import './HeaderMobile.scss'
import closeButton from '../../assets/images/icons/close.svg'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import uzbFlag from "../../assets/images/uzb.png";
import ruFlag from "../../assets/images/rus.png";

const HeaderMobile = ({mobileMenu, setMobileMenu, language, setLanguage}) => {

    const {i18n, t} = useTranslation()

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
        <>
            <div className={`shadow ${mobileMenu ? 'active' : ''}`}/>
            <header className={`header-mobile ${mobileMenu ? '' : 'hidden'}`}>
                <button className="close-button" onClick={event => setMobileMenu(!mobileMenu)} >
                    <img src={closeButton} alt=""/>
                </button>
                <ul>
                    <li onClick={event => setMobileMenu(!mobileMenu)} >
                        <Link to='/'>
                            {t("header.home")}
                        </Link>
                    </li>
                    <li onClick={event => setMobileMenu(!mobileMenu)}>
                        <Link to='/about'>
                            {t("header.about")}
                        </Link>
                    </li>
                    <li onClick={event => setMobileMenu(!mobileMenu)}>
                        <Link to='blog' >
                            {t("header.blog")}
                        </Link>
                    </li>
                    <li>
                        <a className='btn' href="tel: +998977777777">
                            {t("header.call")}
                        </a>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </header>
        </>
    )
}

export default HeaderMobile;