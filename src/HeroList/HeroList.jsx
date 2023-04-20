import SuperHeroItem from '../SuperHeroItem/SuperHeroItem';

function HeroList(props) {


    // put our list of heroes on the DOM
    // JS
    let listOfHeroes = props.heroList.map((hero) => {
        // return some JSX
        return (
            <SuperHeroItem
                key={hero.superheroName}
                hero={hero}
                avengersAssemble={props.avengersAssemble} />
        )
    });

    // JSX on the DOM
    return (
        <div>
            {listOfHeroes}
        </div>
    );

}

export default HeroList;
