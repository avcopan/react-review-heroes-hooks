import React, { Component } from 'react';
import SuperHeroItem from '../SuperHeroItem/SuperHeroItem';

class HeroList extends Component {
    
    render() {
        // put our list of heroes on the DOM
        // JS
        let listOfHereos = this.props.heroList.map((hero) => {
            // return some JSX
            return (
                <SuperHeroItem 
                    hero={hero} 
                    avengersAssemble={this.props.avengersAssemble} />
            )
        });
        
        // JSX on the DOM
        return (
            <div>
                {listOfHereos}
            </div>
        );
    }
}

export default HeroList;
