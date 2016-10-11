import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import { uniq } from 'lodash/fp';

// let Mixin = InnerComponent => class extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this);
//     this.state = {data: []}
//   }
//   update(){
//     axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6').then(
//       resoponse => this.setState({data: resoponse.data.split('\n')}))
//   }
//   componentWillMount(){
//     axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6').then(
//       resoponse => this.setState({data: resoponse.data.split('\n')}));
//     console.log('will mount')
//   }
//   render(){
//     return <InnerComponent
//       update={this.update}
//       {...this.state}
//       {...this.props} />
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
// }
//
// const SHOWDATA = (props) => {return props.data};
//
// let DataMixed = Mixin(SHOWDATA);


const getOptions = (input) => {
  let modifiedData = [];
  let dropdownData = [{'value': 'display', 'label': 'Display'}, {'value': 'search', 'label': 'Search'}];

  return axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6').then((response) => {
    let array = response.data.split('\n');
    for (let i = 1; i < array.length; i++){
      modifiedData[i] = array[i].split(',');
      dropdownData.push({'value': modifiedData[i][0], 'label': modifiedData[i][0]});
    }
    console.log('hello');
    let uniqueData = uniq(dropdownData, 'value');
    console.log('data', uniqueData);
    return {options: uniqueData};
  });
}


function logChange(val) {
    console.log("Selected: " + val.value);
    return val;
}


class App extends React.Component {
  render(){
    return(
      <div id='app'>
      <Select.Async
          name="form-field-name"
          loadOptions={getOptions}
          onChange={logChange}
      />
      </div>
    )
  }
}

export default App
