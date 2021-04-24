import React, { Component } from 'react';
import Ad from './ads/ad'

class About extends Component {
    state = {  }
    render() { 
        return <center>
            <Ad/>
            <div style={{width:'500px',marginTop:'200px',marginBottom:'270px'}}>
            <section class="clean-block clean-hero" style={{color:'rgba(9, 162, 255, 0.85)'}}>
    <div class="text">
        
        <h2><img src="corona-icon.svg" alt=""/>About the site<img src="corona-icon.svg" alt=""/><br /><br /></h2>
        <p>This website is made available to all citizens, so that they can follow the latest developments regarding the state&#39;s efforts to limit the spread of the Coronavirus.<br /><br />The information is updated real-time and without interruption.<br/><br />Citizens are requested to abide by the updated procedures to prevent disease.<br /><br />We wish everyone good health.<br /></p>
        <img src="img/profile-1.jpg"/>
        
    </div>
</section>
            </div>
            <Ad/>
            </center>;
    }
}
 
export default About;