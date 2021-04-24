import React, { Component } from "react";
import Country from './CountryDetails'
import {Link} from 'react-router-dom'
class CountryTable extends Component {
  render() {
    const {
      countries,
      onSortByTotal,
      onSortByCountryName,
    } = this.props;
    <Country countries={countries}/>
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              #   
            </th>
            <th>
              Flags
            </th>
            <th>
              <a href="/" class="text-dark"  onClick={onSortByCountryName}>
                Country
              </a>
            </th>
            <th>
              <a href="/" class="text-dark" onClick={onSortByTotal}>
                Total
              </a>
            </th>
            <th>
              Deaths
            </th>
            <th>
              recovered
            </th>
            <th>
              active
            </th>
            <th>
              Country Code
            </th>
          </tr>
        </thead>
        
        <tbody>
          {countries.map((country) => {
            const style={backgroundColor: 'lightYellow'};
            return (
              <tr>
                <tr><strong> N°={country.id}</strong></tr>
                <td><img class="mr-2" width="100" height="55" src={country.flag} ></img></td>
                <td><Link to={'/Country/'.concat(country.id).concat("/").concat(country.ISO3).concat("/").concat(country.name)}>{country.name}</Link></td>
                <td>{country.total}</td>
                <td>{country.deaths}</td>
                <td>{country.recovered}</td>
                <td>{country.active}</td>
                <td>{country.ISO3}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
      
    );
    
  }
}

export default CountryTable;
