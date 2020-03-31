import React from 'react';
import './HomePage.css';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

function HomePage() {
    return (
        <div className="banner-bg">
            <div className="banner-text">
                <Zoom top cascade>
                    <h6>NOW YOU CAN WATCH THE TALENT</h6>
                </Zoom>
                <Roll cascade>
                    <p>Let's Explore Idea</p>
                </Roll>
                
                <button>EXPLORE NOW</button>
            </div>
        </div>
    )
}

export default HomePage
