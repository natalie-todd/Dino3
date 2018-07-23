import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Jobdetails from './components/Jobdetails'
import Inputform from './components/Inputform'
// import Preview from './components/Preview'
import Footer from './components/Footer'

const dinoData = './listing.json'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    return fetch("./listing.json")
      .then(response => response.json())
      .then(data => this.setState({
        details: data
      }))
  }

  addDetails = data => {

  }
  render() {
    return (
      <main>
        <Header />
        <section id="job-details">
          <h2>Job Details</h2>
          <Jobdetails data={this.state.data} />
        </section>
        <Inputform addDetails={this.addDetails} />
      </main>
    );
  }
}

export default App;
