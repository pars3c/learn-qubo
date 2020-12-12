import React from 'react';

const QuboForm = ({ onChange }) => {
  return (
    <div>
      <input
       type="number"
       placeholder="Amount of Linear Variables"
       onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
// TODO: GIVE BETTER NAMES TO VARIABLES2
const QuboMatrix = (props) => {
  console.log(props.data.value)
  let superArray = new Array(props.data.value**2).fill(0)
  const final = [];
  superArray = new Array(Math.ceil(superArray.length / props.data.value))
  .fill()
  .map(_ => superArray.splice(0, props.data.value))
  console.log(superArray)
  

  for (let i = 0; i < superArray.length; i++) {

    final.push(<p>{JSON.stringify(superArray[i])}</p>)
  }
  return (
    <div className="matrix">
      {final}
    </div>
  )

}

class QuboSandBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };

  }

  getInput = (data) => {
    this.setState({value: parseInt(data)})
    console.log(this.state.value);
  }


  render() {
    return (
      <div>
        <h1>You have {this.state.value}</h1>
        <QuboForm onChange={this.getInput}/>
        {(this.state.value>0 && Number.isInteger(this.state.value)) &&
         <QuboMatrix data={ this.state }/>
        }

        
      </div>
    
    );
  }
}

export default QuboSandBox;
