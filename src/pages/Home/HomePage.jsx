import './HomePage.scss'
import img1 from '../../assets/images/intro.png'
import img2 from '../../assets/images/intro-2.png'
import cardImage1 from '../../assets/images/1-logo.png'
import cardImage2 from '../../assets/images/2-logo.png'
import cardImage3 from '../../assets/images/3-logo.png'
import HomeCard from "../../components/HomeCard";
import Footer from "../../containers/Footer";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import AOS from "aos";

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    const {t} = useTranslation()

    const CardData = [
        {
            imgLink: cardImage1,
            title: t("homePage.cardSection.0.title"),
            overview: t("homePage.cardSection.0.subtitle")
        },
        {
            imgLink: cardImage2,
            title: t("homePage.cardSection.1.title"),
            overview: t("homePage.cardSection.1.subtitle")
        },
        {
            imgLink: cardImage3,
            title: t("homePage.cardSection.2.title"),
            overview: t("homePage.cardSection.2.subtitle")
        }
    ]

    return (
        <>
            <section className="intro">
               <div className="container">
                   <h1>{t('homePage.hero.title')}</h1>
                   <img src={img1} alt=""/>
                   <img src={img2} alt=""/>
               </div>
            </section>
            <section className="card-section">
                <div className="container">
                    <ul className="cards">
                        {
                            CardData.map(item=> (
                                <HomeCard
                                    imgLink={item.imgLink}
                                    title={item.title}
                                    overview={item.overview}
                                />
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="location">
               <div className="container">
                   <iframe title='location'
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.812791521143!2d69.20100591597203!3d41.26941187927516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a19bb884ca9%3A0xb7386f7cd9f2cf2b!2z0JzQtdC90LXQtNC20LzQtdC90YIg0JTQtdCy0LXQu9C-0L_QvNC10L3RgiDQmNC90YHRgtC40YLRg9GCINC-0YQg0KHQuNC90LPQsNC_0L7RgCDQuNC9INCi0LDRiNC60LXQvdGC!5e0!3m2!1sru!2s!4v1642175403456!5m2!1sru!2s"/>
               </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage