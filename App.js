import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import { uniq } from 'lodash/fp';


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
      <h1>Adverity</h1>
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
