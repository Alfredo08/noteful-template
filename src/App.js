import React from 'react';
import {Route, Link} from 'react-router-dom';
import Profile from './Profile';
import AppContext from './AppContext';
import HobbyForm from './HobbyForm';

class App extends React.Component{

  state = {
    hobbies : ['program', 'dance', 'sing'],
    name : "Danielle"
  }

  addHobby = ( newHobby ) => {
    this.setState({
      hobbies : [...this.state.hobbies, newHobby]
    })
  }

  render(){
    const contextValues = {
      hobbies : this.state.hobbies,
      name : this.state.name,
      addHobby : this.addHobby
    };

    return(
      <AppContext.Provider value={contextValues}>
        <h1>
          Hello there welcome to our website
        </h1>
        <nav>
          <Link to="/profile">
            Profile
          </Link>
          <Link to="/add-hobby">
            Add Hobby
          </Link>
        </nav>
        
        <Route path="/profile" component={ Profile }/>
        <Route path="/add-hobby" component={ HobbyForm }/>
      </AppContext.Provider>
    );
  }
}

export default App;
