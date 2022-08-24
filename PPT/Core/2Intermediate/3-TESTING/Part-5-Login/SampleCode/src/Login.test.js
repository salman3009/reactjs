import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import { Login } from './login';

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe('Login Component', () => {


  it('should render an email input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

  it('should render a password input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  it('should render a submit button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
  });

  it('the default value for both fields should be empty', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="password"]').prop('value')).toBe('');
  });

  it('on change of value in the field, the state of that field in the component should be updated', () => {
    const wrapper = shallow(<Login />);

    // if the simulated event value and the field value is same then state is updating on event trigger

    wrapper.find('input[name="email"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[name="email"]').prop('value')).toBe(
      'email@id.com'
    );
    wrapper.find('input[name="password"]').simulate('change', {
      target: {
        value: 'somepassword',
      },
    });
    expect(wrapper.find('input[name="password"]').prop('value')).toBe(
      'somepassword'
    );
  });


});
