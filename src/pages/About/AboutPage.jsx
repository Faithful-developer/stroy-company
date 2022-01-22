import './AboutPage.scss'
import Footer from "../../containers/Footer";
import img1 from '../../assets/images/1-line.png'
import img2 from '../../assets/images/2-line.png'
import img3 from '../../assets/images/3-line.png'
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import AOS from "aos";
import {Helmet} from "react-helmet";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const {t} = useTranslation()

    return (
        <>
            <Helmet>
                <title>
                    About Page
                </title>
            </Helmet>
            <section className="intro-about">
                <div className="container">
                    <div className="context">
                        <h2>{t("aboutPage.hero.title")}</h2>
                        <p>
                            {t("aboutPage.hero.subtitle")}
                        </p>
                    </div>
                </div>
            </section>
            <div className="info-section">
                <div className="container">
                    <div className="line" data-aos="fade-up">
                        <div className="context-section">
                            <h3>{t("aboutPage.lines.0.title")}</h3>
                            <p>{t("aboutPage.lines.0.subtitle")}</p>
                        </div>
                        <div className="img-section">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                    <div className="line" data-aos="fade-up">
                        <div className="img-section">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="context-section">
                            <h3>{t("aboutPage.lines.1.title")}</h3>
                            <p>{t("aboutPage.lines.1.subtitle")}</p>
                        </div>
                    </div>
                    <div className="line" data-aos="fade-up">
                        <div className="context-section">
                            <h3>{t("aboutPage.lines.2.title")}</h3>
                            <p>{t("aboutPage.lines.2.subtitle")}</p>
                        </div>
                        <div className="img-section">
                            <img src={img3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage