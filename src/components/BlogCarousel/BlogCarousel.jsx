import './BlogCarousel.scss'

const BlogCarousel = ({imgLink}) => {
    return (
        <div className="carousel-item">
            <img src={imgLink} alt=""/>
        </div>
    )
}

export default BlogCarousel;