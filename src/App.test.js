import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Note from  './Notes/Note';

// Shadow tests
it( "Should load the App component correctly", () => {
  let testContainer = document.createElement( 'div' );
  ReactDOM.render( <App />, testContainer );
  ReactDOM.unmountComponentAtNode( testContainer );
});

const dummyNote = {
  name: "Test note"
};

it( "Should load the Note component correctly", () => {
  let testContainer = document.createElement( 'div' );
  ReactDOM.render( <Note note={dummyNote}/>, testContainer );
  ReactDOM.unmountComponentAtNode( testContainer );
});

// Snapshot tests
it( 'Renders the virtual App in the UI correctly', () => {
  let testContainer = renderer.create( <App /> ).toJSON();
  expect( testContainer ).toMatchSnapshot();
});

it( 'Renders the virtual Note in the UI correctly', () => {
  let testContainer = renderer.create( <Note  note={dummyNote}/> ).toJSON();
  expect( testContainer ).toMatchSnapshot();
});