
import katie from './images/katie.svg'
import wedding from './images/wedding.svg'
import bike from './images/mountain.svg'

export default [
    {
        id: 1, 
        title: "Life Lessons with KatieZaferes",
        description: "I will share with you what I call Positively Impactful Moments of Disappopintment.",
        price: 136,
        coverImg: katie,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: 'USA',
        openSpots: 0,
    },
    {
        id: 2, 
        title: "Learn Wedding photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike,\
        join us in learning techniques required to leave the happy memories that'll last a lifetime.  ",
        price: 125,
        coverImg: wedding,
        stats: {
            rating: 5.0,
            reviewCount: 23
        },
        location: 'Online',
        openSpots: 27,
    },
    {
        id: 3, 
        title: "Group Moutain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while\
        conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: bike,
        stats: {
            rating: 4.9,
            reviewCount: 2
        },
        location: 'Norway',
        openSpots: 3,
    },
 
]






