import './SinglePost.scss'
import {useParams} from "react-router-dom";
import Footer from "../../containers/Footer";
import cardImg from "../../assets/images/card-image.png";
import {useTranslation} from "react-i18next";

const SinglePost = () => {

    const {id} = useParams()
    const {t} = useTranslation()

    function findArrayElementByTitle(array, idNumber) {
        return array.find((element) => {
            return element.id === idNumber;
        })
    }

    const constructionInfo = [

        {
            id: 1,
            title: t("blogPage.constructionCard.0.title"),
            fullyInfo:t("blogPage.constructionCard.0.fullyInfo"),
            arrayImg: [cardImg, cardImg, cardImg, cardImg, cardImg, cardImg]
        },

        {
            id: 2,
            title: t("blogPage.constructionCard.1.title"),
            fullyInfo:t("blogPage.constructionCard.1.fullyInfo"),
            arrayImg: [cardImg, cardImg, cardImg, cardImg, cardImg, cardImg]
        },
        {
            id: 3,
            title: t("blogPage.constructionCard.2.title"),
            fullyInfo:t("blogPage.constructionCard.2.fullyInfo"),
            arrayImg: [cardImg, cardImg, cardImg, cardImg, cardImg, cardImg]
        }
    ]

    let construction = findArrayElementByTitle(constructionInfo, parseInt(id))

    console.log(construction)

    return (
        <>
            <section className="construction-info">
                <div className="container">
                    <div className="img-construction">
                        {
                            construction.arrayImg.map(item =>(
                                <img src={item} alt=""/>
                            ))
                        }
                    </div>
                    <div className="info-construction">
                        <h1>{construction.title}</h1>
                        <p>{construction.fullyInfo}</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SinglePost