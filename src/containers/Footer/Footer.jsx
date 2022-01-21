import './Footer.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <div className="box logo-box">
                    <Link to='/' className='logo'>
                        296-XIKMK
                    </Link>
                </div>
                <div className="box pages">
                    <h3>{t("footer.pages")}</h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                {t("footer.home")}
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                {t("footer.about")}
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog'>
                                {t("footer.blog")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3>{t("footer.phoneNumbers")}</h3>
                    <ul className='phone-number'>
                        <li>
                            <a href='tel: +998 (97) 777-77-77'>
                                +998 (97) 777-77-77
                            </a>
                        </li>
                        <li>
                            <a href='tel: +998 (97) 777-77-77'>
                                +998 (97) 777-77-77
                            </a>
                        </li>
                        <li>
                            <a href='tel: +998 (97) 777-77-77'>
                                +998 (97) 777-77-77
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3>
                        {t("footer.socialNetworks")}
                    </h3>
                    <ul className='social-network'>
                        <li>
                            <a href="/" className='instagram'>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="/" className='telegram'>
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="/" className='facebook'>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer