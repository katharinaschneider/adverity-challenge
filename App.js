import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: []};
  }

  componentWillMount(){
    axios.get('http://mockbin.org/bin/3f1037be-88f3-4e34-a8ec-d602779bf2d6').then(
      resoponse => this.setState({data: resoponse.data.split('\n')}))
  }

  render(){
    console.log(this.state.data);
    return <div>{this.state.data[0]}</div>
    // let rows = this.state.data.map( matrix => {
    //   return <MatrixRow data={matrix} />
    // })
    // return (
    //   <table>
    //     <tbody>
    //       {rows}
    //     </tbody>
    //   </table>
    // );
  }
}
// const MatrixRow = (props) => {
//   return <tr>
//     <td>{props.data.campaign}</td>
//     <td>{props.data.channel}</td>
//     <td>{props.data.clicks}</td>
//     <td>{props.data.impressions}</td>
//   </tr>
// }


export default App
