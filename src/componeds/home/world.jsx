import React, { Component } from 'react';
import axios from 'axios'

const covid ="https://api.covid19api.com/summary";

class World extends Component {
    constructor(props){
        super(props);
        
        this.state={
            items: [],
        }    
    }
    componentDidMount(){
        axios.get(covid)
        .then(res=>{
            // console.table(res.data.Countries)
            // console.log(res.data.Global.NewConfirmed)
            this.setState({items: res.data.Global})
            // console.log(this.state)
        })
        .catch(error=>{
            console.log('error');
        })
        
    }
    
    render() { 
        return <div>
        <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12" style={{textAlign: 'center',padding: '79px'}}><strong class="text-primary" style={{fontSize: '54px',borderColor: 'rgb(197,50,248)',marginLeft: '46px',marginRight: '46px',padding: '0px'}}><img style={{width: '100px',height: '100px', marginTop: '-21px'}} src='img/world.webp' />The World</strong></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 text-center" style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/coronaicon.svg" /><strong style={{margin: '0px',fontSize: '23px'}}><br />Total Confirmed :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',padding: '0px',paddingTop: '0px',color: 'rgb(228,68,80)'}}>{this.state.items.TotalConfirmed}</small></div>
                <div
                    class="col-12 col-md-4 text-center" style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/grave.svg" style={{width: '42px'}} /><strong><br />Total Deaths :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',paddingTop: '0px',borderColor: 'rgb(27,45,94)',color: 'rgb(0,0,0)'}}>{this.state.items.TotalDeaths}</small></div>
            <div
                class="col-12 col-md-4 text-center" style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/recovered.svg" /><strong><br />Total Recovered :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',paddingTop: '0px',color: 'rgb(43,182,115)'}}>{this.state.items.TotalRecovered}</small></div>
    </div>
    </div>
    </div>
    <div>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 text-center" style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/coronaicon.svg" /><strong><br />New Confirmed :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',paddingTop: '0px',color: 'rgb(228,68,80)'}}>{this.state.items.NewConfirmed}</small></div>
            <div class="col-12 col-md-4 text-center"
                style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/grave.svg" style={{width: '42px'}} /><strong><br />New Deaths :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',paddingTop: '0px',borderColor: 'rgb(27,45,94)',color: 'rgb(0,0,0)'}}>{this.state.items.NewDeaths}</small></div>
            <div
                class="col-12 col-md-4 text-center" style={{textAlign: 'center',fontSize: '23px',padding: '25px'}}><img src="/img/recovered.svg" /><strong><br />New Recovered :<br /><br /></strong><small style={{fontSize: '32px',margin: '0px',marginTop: '0px',marginLeft: '0px',marginBottom: '0px',paddingTop: '0px',color: 'rgb(43,182,115)'}}>{this.state.items.NewRecovered}</small></div>
    </div>
</div>
</div>
<div class="col-md-12" style={{padding: '79px'}}></div>
    </div>;
    }
}
 
export default World;