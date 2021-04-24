import React, { Component } from "react";

import axios from "axios";

import { Search } from "react-bootstrap-icons";

import CountryTable from "./CountryTable";
import Loading from "./Loading";
import Ad from '../ads/ad'

class Countries extends Component {
  state = {
    countries: [],
    flags:[],
    filterText: "",
    allCountryTotal: 0,
    selectedCountries: [],
  };

  url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
  async componentDidMount() {
    const response = await axios.get(this.url);
    const rows = response.data.split("\n");
    

    const countries = [];
    let allCountryTotal = 0;
    for (let i = 1; i < rows.length; i++) {
      // console.log(rows.length)
      const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //splitting on ,
      const countryName = row[0].replace(/"/g, "");
      const total = Number(row[4]);
      const deaths = Number(row[5]);
      const recovered = Number(row[6]);
      const active = Number(row[7]);
      const ISO3= String(row[13]);
      const id = i;
      if (ISO3 !== ""){if ( ISO3 !=="XKS"){
        const urlf="https://restcountries.eu/rest/v2/alpha/".concat(String(row[13]));
        if (urlf !== "https://restcountries.eu/rest/v2/alpha/undefined"){
          const responsef = await axios.get(urlf);
          const flags = String(responsef.data.flag);
          this.setState({flags:flags})
          
        }
      }}
      console.log(this.state.flags)
      if (countryName !== "") {
        countries.push({
          name: countryName,
          total: total,
          deaths: deaths,
          recovered: recovered,
          active: active,
          ISO3:ISO3,
          flag:this.state.flags,
          id:id,
        });
        allCountryTotal += total;
      }
    }
    // console.table(countries);
    
    this.setState({ countries, allCountryTotal });
  }

  handleOnRowSelected = (countryToUpdate) => {
    const countries = [...this.state.countries];

    const countryIndex = countries.findIndex(
      (c) => c.name === countryToUpdate.name
    );

    const country = {
      name: countryToUpdate.name,
      total: countryToUpdate.total,
      deaths: countryToUpdate.deaths,
      selected: !countryToUpdate.selected,
    };

    countries[countryIndex] = country;

    this.setState({
      countries,
      selectedCountries: countries.filter((c) => c.selected),
    });
  };

  sortByTotal = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (countryB.total > countryA.total) return 1;
    else if (countryB.total < countryA.total) return -1;
    else return 0;
  };

    

  handleOnSortByTotal = (event) => {
    this.handleOnSortBy(event, this.sortByTotal);
  };

  sortByDeaths= (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (countryB.Deaths > countryA.Deaths) return 1;
    else if (countryB.Deaths < countryA.Deaths) return -1;
    else return 0;
  };

  handlesortByDeaths = (event) => {
    this.handleOnSortBy(event, this.sortByDeaths);
  };

  sortByCountryName = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (countryA.name > countryB.name) return 1;
    else if (countryA.name < countryB.name) return -1;
    else return 0;
  };

  handleOnSortByCountryName = (event) => {
    this.handleOnSortBy(event, this.sortByCountryName);
  };

  handleOnSortBy = (event, sortOperation) => {
    event.preventDefault();
    const countries = [...this.state.countries];
    countries.sort(sortOperation);
    this.setState({ countries });
  };


  handleFilterTextChange = (event) => {
    const filterText = event.target.value;
    this.setState({ filterText: filterText });
  };

  render() {
    const {
      countries,
      allCountryTotal,
      filterText,
    } = this.state;
    return (
      <div>
        <Ad/>
        <h1 class="text-primary" style={{textAlign: "center" ,fontSize: '54px',borderColor: 'rgb(197,50,248)',marginLeft: '46px',marginRight: '46px',padding: '0px'}}>
          All Country
        </h1>
        {allCountryTotal === 0 ? (
          <Loading />
        ) : (
          <div>
            <div className="input-group input-group-lg mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <Search />
                </span>
              </div>
              <input
                type="text"
                value={filterText}
                onChange={this.handleFilterTextChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Search"
              />
            </div>

            <CountryTable
              countries={countries.filter((country) => {
                if (filterText === "") {
                  return country;
                }
                return (
                  country.name
                    .toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                );
              })}
              onSortByTotal={this.handleOnSortByTotal}
              onSortByCountryName={this.handleOnSortByCountryName}
              onRowSelected={this.handleOnRowSelected}
              onSortByDeaths={this.handlesortByDeaths}
            />
          </div>
        )}
        <Ad/>
      </div>
    );
  }
}

export default Countries;
