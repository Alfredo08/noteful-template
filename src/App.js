import React from 'react';
import Drink from './Drink';

class App extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      drinks : [],
      baseURL : "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    }
  }

  updateDrinks = (data) =>{
    this.setState({
      drinks : data
    });
  }

  getDrinks = ( event ) => {
    event.preventDefault();
    
    const drinkName = event.target.drinkName.value;
    const url = this.state.baseURL + drinkName;

    fetch( url )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
        throw new Error( "Something went wrong" );
      })
      .then( repsonseJSON => {
        this.updateDrinks( repsonseJSON.drinks );
      })
      .catch( err => {
        console.log( err.message );
      });
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.getDrinks}>
          <label> Drink name: </label>
          <input type="text" id="drinkName" />
          <button type="submit">
            Search
          </button>
        </form>
        <ul>
          {
            this.state.drinks.map( ( drink, index ) => {
              return ( 
                <li key={index}>
                  <Drink drink={drink}/> 
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;