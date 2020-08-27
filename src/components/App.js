import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments'
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import data from '../data';
import {without} from 'lodash';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
       myAppointments: [],
       formDisplay: false,
       lastIndex: 0
    };
    
    // const apts = result.map(item => {
    //   return item;
    // })
    const listItemes = data.map(item=>(
      item
    ));
    this.state.myAppointments = listItemes
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }
  deleteAppointment(apt){
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts,apt);
    this.setState({
      myAppointments: tempApts
    }
    )
  }
  addAppointment(apt){
    let tempApts = this.state.myAppointments;
    
    tempApts.unshift(apt);
    this.setState({
      myAppointments: tempApts
     
    });
  }
  // componentDidMount(){
  //   fetch(data)
  //   .then(response => response.json())
  //   .then(result =>{
  //     const apts = result.map(item => {
  //       return item;
  //     })
  //     this.setState({
  //       myAppointments: apts
  //     });
  //   });
    
  // }
  
  
  render(){
    
    
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                
                <AddAppointments 
                formDisplay={this.state.formDisplay}
                toggleForm={this.toggleForm}
                addAppointment = {this.addAppointment}
                />
                <SearchAppointments/>
                <ListAppointments appointments ={this.state.myAppointments}
                deleteAppointment={this.deleteAppointment}/>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
  }
}

export default App;
