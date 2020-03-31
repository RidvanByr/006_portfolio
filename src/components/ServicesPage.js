import React from 'react';
import { portfoliaData, servicesData } from '../components/data';
import Flip from 'react-reveal/Flip';
import '../components/ServicesPage.css'

function ServicesPage() {
    
    return (
        <div>
            <div className="servicesbanner-bg">
                <div className="servicesbanner-text">  
                    <Flip left>
                        <h1>{servicesData.title}</h1>
                        <p>{servicesData.subTitle}</p>  
                    </Flip>         
            
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;