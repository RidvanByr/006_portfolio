import React, { Component } from 'react';
import { portfolioData } from '../components/data';
import './PortfolioPage.css'
import {CardGroup} from 'react-bootstrap';
import PortfolioCard from './PortfolioCard'

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // portfolio: portfolioData, // chould be done thıs way!
            category: []
        }
    }

    clickHandler = (event) => {

        if (event !== 'all') {

            this.setState( () => {
                const newCategories = portfolioData.cards.filter( item => item.category === event )
                return {
                    category: newCategories
                }
            })

        } else {

            this.setState( () => {
                return{
                    category: portfolioData.cards
                }
            })
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="text-center my-5 py-5">
                    <h1>{ portfolioData.title }</h1>
                    <p style={{color:'gray'}}>{ portfolioData.subTitle }</p>
                </div>

                <div className="text-center">
                    {
                        portfolioData.categories.map( (item, index) =>

                             <h6 key={index} className="port-cat" onClick={ () => this.clickHandler(item) }>
                                { item.toUpperCase() }
                             </h6>
                        )
                    }
                </div>

                <div>
                    {
                        this.state.category.length === 0 ?
                        (
                            <CardGroup className="my-5 mx-1">
                            {
                                portfolioData.cards.map( (item,index) =>

                                    <PortfolioCard 
                                            key={index}
                                            { ...item }
                                    />
                                )
                            }
                            </CardGroup>
                        )
                      
                        : 

                        <CardGroup className="my-5 mx-1">
                            {
                                this.state.category.map( (item,index) =>

                                    <PortfolioCard 
                                            key={index}
                                            { ...item }
                                    />
                                )
                            }
                        </CardGroup>
                           
                    }
                </div>
            </div>
        )
    }
}

export default Portfolio
