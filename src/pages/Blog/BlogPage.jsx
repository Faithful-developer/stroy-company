import './BlogPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import carouselImg from '../../assets/images/carousel.png'
import BlogCarousel from "../../components/BlogCarousel";
import BlogCard from "../../components/BlogCard";
import Footer from "../../containers/Footer";
import cardImg from "../../assets/images/card-image.png";
import {useTranslation} from "react-i18next";

const BlogPage = () => {

    const {t} = useTranslation()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const carousel = [
        {
            imgLink: carouselImg
        },
        {
            imgLink: carouselImg
        },
        {
            imgLink: carouselImg
        },
        {
            imgLink: carouselImg
        },
    ]
    const constructionInfo = [

        {
            id: 1,
            imgLink: cardImg,
            title: t("blogPage.constructionCard.0.title"),
            overview: t("blogPage.constructionCard.0.overview"),
        },

        {
            id: 2,
            imgLink: cardImg,
            title: t("blogPage.constructionCard.1.title"),
            overview: t("blogPage.constructionCard.1.overview"),
        },
        {
            id: 3,
            imgLink: cardImg,
            title: t("blogPage.constructionCard.2.title"),
            overview: t("blogPage.constructionCard.2.overview"),
        }
    ]



    return (
        <>
            <div className='blog-carousel'>
                <Slider {...settings}>
                    {
                        carousel.map(item => (
                            <BlogCarousel
                                imgLink={item.imgLink}
                            />
                        ))
                    }
                </Slider>
            </div>
            <div className="construction-cards">
                <div className="container">
                    {
                        constructionInfo.map(item =>(
                            <BlogCard
                                id={item.id}
                                imgLink={item.imgLink}
                                title={item.title}
                                overview={item.overview}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BlogPage