import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'

var data = require('./your_file.json');
var index;
var nianOrd = false;
const sanitizeString = function (str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nian: 'Skriv in nio bokstäver för att se om det är ett ord.',
    };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({nian: ''})
    if (event.target.value.length == 9){
      
      for (index = 0; index < data.length; ++index) {
        if (sanitizeString(data[index])==sanitizeString(event.target.value)){
          this.setState({nian: data[index]})
        }     
      }
    }
  }



  render() {
    return (
      <div className="App">
        <form>
            <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={4} />
        </form>
        <div className="preview">
          <h1>{this.state.nian}</h1>
        </div>
      </div>
    );
  }
}

export default App