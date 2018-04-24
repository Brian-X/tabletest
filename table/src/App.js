import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>


//     );
//   }
// }

class App extends React.Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
    $.ajax({
       url: "http://jsonplaceholder.typicode.com/posts",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {
         
         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }.bind(this)
    })
  }
  render() {
    
        
    return (
      <div className="container">
      <table className="table table-bordered table-hover">
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>

       </div>
    )
  }
}

// ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
