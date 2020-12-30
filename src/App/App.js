import React, { Component } from 'react';
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList';
import './App.css';

class App extends Component {

  // set up state
  state = {
    heroList: [
      {
        superheroName: 'Prof X',
        onDuty: true,
        alias: 'Xavier',
        power: 'does stuff'
      },
    ],
  };

  // just like $(document).ready()
  componentDidMount() {
    console.log('App is loaded!');
    this.getData();
  }

  getData() {
    // make GET request here

    // in axios.get().then(response)
    // this.setState({
    //   heroList: response.data
    // });

  }

  // called from Item
  avengersAssemble() {
    console.log('Avengers Assemble!');
  }
  
  render() {
    // JSX
    return (
      <div className="App">

        <Header />

        {/* list of super heroes */}
        {/* lefthand side of props becomes this.props.the_name */}
        <main>
          <HeroList 
                heroList={this.state.heroList} 
                avengersAssemble={this.avengersAssemble} /> 
        </main>


      </div>
    );
  }
}

export default App;
