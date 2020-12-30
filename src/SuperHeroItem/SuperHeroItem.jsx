import React, { useState } from 'react';

function SuperHeroItem({ hero, avengersAssemble }) {

    const [isMasked, setIsMasked] = useState(true);


    // toggles if we show the name or not
    const toggleMask = () => {
        console.log('clicked a button');
        // set state
        setIsMasked(!isMasked)

    }


    // determine if we should render the on or off duty message
    const onOrOffDuty = () => {
        if (hero.onDuty) {
            // need to return JSX
            return <p>ON DUTY</p>;
        } else {
            // need to return JSX
            return <p>SLEEPING</p>;
        }
    }

    // JSX on the DOM

    return (
        <div className="hero">
            {/* {JSON.stringify(this.props)} */}
            <h2>{hero.superheroName}</h2>
            <p>Power: {hero.power}</p>

            {/* conditionally render the hero's real name */}
            { !isMasked &&
                <p>Alias: {hero.alias}</p>
            }

            {/* conditionally render Duty status */}
            { onOrOffDuty()}

            <button onClick={toggleMask}>Toggle Alias</button>
            <button onClick={() => avengersAssemble(hero)}>Assemble!</button>

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

export default SuperHeroItem;
