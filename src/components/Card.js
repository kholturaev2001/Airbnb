import react from 'react';
import star from '../images/star.svg'

export default function Card(props) {
    let badgeText
    if (props.item1.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item1.location === "Online") {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {
                badgeText && <div className="card-badge" >{badgeText} </div> 
            }
            <img 
               src={props.item1.coverImg} 
               className="card-image" />
            <div className="card-stats" >
                <img src={star} className='card-star' />
                <span>{props.item1.stats.rating}</span>
                <span className="gray">({props.item1.stats.reviewCount}) • </span>
                <span className="gray">{props.item1.location}</span>
            </div>
            <p>{props.item1.title}</p>
            <p>
                <span className="bold">From ${props.item1.price}</span> / person
            </p>
        </div>
    )
}