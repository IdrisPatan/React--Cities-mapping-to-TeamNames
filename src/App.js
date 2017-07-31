import React, { Component } from 'react';
import './App.css';

class App extends Component {

    // render() {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",

            teams:
            {
                dallas: 'Cowboys',
                chicago: 'Chicago Bulls'
            }

            teamsLogo:
                {
                    dallas: 'cowboys'
                    chicago: 'bulls'
                }
        }
        this._onChange = this._onChange.bind(this)
        //this._onSubmit = this._onSubmit.bind(this)
    }

    // // _onSubmit(event) {
    //     //event.preventDefault()
    //     // console.log(event.target.value)
    // }

    _onChange(event){
        this.setState({
            cityName:this.state.teams[event.target.value.toLowerCase()]
        })
    }

    render() {
    return (
      <div className="App">
          {/*<form onSubmit={this._onSubmit}>*/}
              <h1> What's your favorite city?</h1>
              <input /*id="cityName" type="text" name="cityName" value={this.state.value}*/
                  onChange={this._onChange} />
          {/*</form>*/}
          {inputName(this.state.cityName)}
      </div>
    );
  }
}

const inputName =(cityName =><h3> Sports Team is: {cityName}</h3>)

export default App;
