import './HomeCard.scss'

const HomeCard = ({imgLink, title, overview}) => {
    return (
        <li className='card' data-aos="fade-up" >
            <img src={imgLink} alt=""/>
            <h3>{title}</h3>
            <p>{overview}</p>
        </li>
    )
}

export default HomeCard