import React from 'react';
import Folder from './Folder';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      folders : [ "tasks", "documents", "desktop" ],
      notes : [{
        name : "Note 1",
        folderName : "tasks"
      },
      {
        name : "Note 2",
        folderName : "tasks"
      },
      {
        name : "Note 3",
        folderName : "documents"
      },
      {
        name : "Note 4",
        folderName : "documents"
      },
      {
        name : "Note 5",
        folderName : "desktop"
      }]
    }
  }

  render = () => {
    return(
      <BrowserRouter>
      { 
          this.state.folders.map( (folderName, index) => {
            return ( <Link key={index} to={`/folders/${folderName}`} > {folderName} </Link>)
          })
        }
        <Route path="/folders/:folderName" render={ (routeProps) => <Folder {...routeProps} notes={this.state.notes}/>} />
      </BrowserRouter>
    );
  }
}

export default App;