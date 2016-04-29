import React from 'react';
import { mount, shallow} from 'enzyme';

import App from '../../src/screens/app';
import Helmet from 'react-helmet';
import Footer from '../../src/components/footer';
import NavBar from '../../src/components/navbar';


describe('App screen', function () {
  
  it('Loads Footer, Navbar and Helmet', function (done) {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Helmet />)).toBeTrue;
    expect(wrapper.contains(<Footer />)).toBeTrue;
    expect(wrapper.contains(<NavBar />)).toBeTrue;
  });
  
});
