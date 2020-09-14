import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Hobby from './Hobby';

// Smoke tests
it( "Should load the App component correctly", () => {
  let testContainer = document.createElement( 'div' );
  ReactDOM.render( <App />, testContainer );
  ReactDOM.unmountComponentAtNode( testContainer );
});

it( "Should load the Hobby component correctly", () => {
  let testContainer = document.createElement( 'div' );
  ReactDOM.render( <Hobby hobby="Sing"/>, testContainer );
  ReactDOM.unmountComponentAtNode( testContainer );
})

// Snapshot tests
it( 'Renders the virtual Hobby in the UI correctly', () => {
  let testContainer = renderer.create( <Hobby hobby="Sing" /> ).toJSON();
  expect( testContainer ).toMatchSnapshot();
});

/*

it( 'Renders the virtual Note in the UI correctly', () => {
  let testContainer = renderer.create( <Note  note={dummyNote}/> ).toJSON();
  expect( testContainer ).toMatchSnapshot();
});

*/