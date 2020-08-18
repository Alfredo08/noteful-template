import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hobby from './Hobby';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

  describe(`Tabs Component`, () => {
    const tabsProp = [/* contents not shown */]
  
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Hobby />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
    it('renders empty given no tabs', () => {
      const wrapper = shallow(<Hobby />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders the first tab by default', () => {
      const wrapper = shallow(<Hobby hobby={['sing','dance']} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });