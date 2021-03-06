import React from 'react';
import StarRatings from 'react-star-ratings'


function TestimonialCard({ image, person, comment, rating }) {
    return (
        <div style={{width: '50%', height: '300px'}}>
            <div className="m-3 shadow cardBox">
                <img src={image} alt="brand" style={{padding: '15px'}}/>
                <StarRatings
                    rating= {rating}
                    starRatedColor= "#f8a502"
                    starEmptyColor= 'lightblue'
                    numberOfStars= {5}
                    starDimension= '15px'
                    starSpacing= 'none'
                />
                <h6 style={{textAlign: 'left', fontWeight: 'bold', padding: '15px 15px 0'}}>{person}</h6>
                <p style={{textAlign: 'left', color: 'gray', fontSize: '14px', padding: '0 15px 15px'}}>{comment}</p>
            </div>

        </div>
    )
}

export default TestimonialCard
