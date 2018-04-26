import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import $ from "jquery";
const $ = require('jquery');
$.DataTable = require('datatables.net');

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
       url: "https://jsonplaceholder.typicode.com/posts",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {
         
         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }
    })
  }
  render() {
    
        
    return (
      <div className="container">
      <table id="ipsumtable"  className="tablestyle table table-striped table-hover">
        <thead>
          <tr>
            <th>User</th>
            <th>ID</th>
            <th>Title</th>
            <th>Story</th>
          </tr>
        </thead>
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

// $(document).ready(function() {
//     $.noConflict();
//     var table = $('#ipsumtable').DataTable();
// });
$(document).ready(function() {
    var table = $('#ipsumtable').DataTable( {
        select: true
    } );
 
    table
        .on( 'user-select', function ( e, dt, type, cell, originalEvent ) {
            if ( $(originalEvent.target).index() === 0 ) {
                e.preventDefault();
            }
        } );
} );

// ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
