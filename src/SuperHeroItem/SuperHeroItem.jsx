import React, { Component } from 'react';

class SuperHeroItem extends Component {

    state = {
        unMask: true,
    };

    // toggles if we show the name or not
    toggleMask = () => {
        console.log('clicked a button');
        // set state
        this.setState({
            unMask: !this.state.unMask
        });
    }


    // determine if we should render the on or off duty message
    onOrOffDuty = () => {
        if(this.props.hero.onDuty) {
            // need to return JSX
            return <p>ON DUTY</p>;
        } else {
            // need to return JSX
            return  <p>SLEEPING</p>;
        }
    }

    render() {
        // JSX on the DOM

        return (
            <div className="hero">
                {JSON.stringify(this.props)}
                <h2>{this.props.hero.superheroName}</h2>
                <p>Power: {this.props.hero.power}</p>

                {/* conditionally render the hero's real name */}
                { this.state.unMask && 
                    <p>Alias: {this.props.hero.alias}</p>
                }
                
                {/* conditionally render Duty status */}
                { this.onOrOffDuty() }

                <button onClick={this.toggleMask}>Toggle Alias</button>
                <button onClick={this.props.avengersAssemble}>Assemble!</button>

                {/* if true, show the thing */}
                {/* { this.props.hero.onDuty && <p>ON DUTY</p> } */}

                {/* if/else show one thing or another */}            
                {/* {
                    this.props.hero.onDuty ? /* if() */
                        // <p>ON DUTY</p> :         /* true */
                        // <p>SLEEPING</p>          /* false */
                    // }*/}
                }
            </div>
        );
    }
}

export default SuperHeroItem;
