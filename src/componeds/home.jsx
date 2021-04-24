import React, { Component } from 'react'
import World from './home/world'
import ContactUs from './home/contactForm'
import Ad from './ads/ad'
class Home extends Component {
  state = {}
  render() { 
    return (
    <div className="bg-light">
      <Ad/>
        <World/>
        
        <Ad/>
        <ContactUs/>
        {/* <center>
          <img src="https://covid19.mathdro.id/api/og" alt="a"/>
        </center> */}
        <Ad/>
        
    </div>
    );
  }
}
 
export default Home;