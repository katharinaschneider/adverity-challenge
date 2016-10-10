import React from 'react';
import axios from 'axios';
class App extends React.Component{
  constructor(){
    super();
    this.state = axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6').then(data => {
      console.log('csv lines', data.data.split('\n'))
    })
  }
  render(){
    return <div>this.state.data</div>
  }
}

export default App
