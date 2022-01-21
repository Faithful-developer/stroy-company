import './BlogCard.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import AOS from 'aos'

const BlogCard = ({id, imgLink, title, overview}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <Link to={`/construction/${id}`}  className="blog-card" data-aos="fade-up"
              data-aos-anchor-placement="top-center" >
            <div className="img-section">
                <img src={imgLink} alt=""/>
            </div>
            <div className="info-section">
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </Link>
    )
}

export default BlogCard