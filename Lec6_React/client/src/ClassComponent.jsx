import React, { Component } from "react";

export default class ClassComponent extends Component {
	constructor() {
		super();
    this.state = {
      name:"",
      counter:0
    }
	}
  componentDidMount(){
    console.log("Compomnent Mount");
  }
  componentDidUpdate(){
    console.log("🚀 ~ ClassComponent ~ componentDidUpdate ~ componentDidUpdate:")
    
  }
	render() {
		const { name,user: { userId }} = this.props;
    
		return (
			<>
				<h1>Class Component</h1>
				<h1>Class Component {name}</h1>
        <div>Counter Value: {this.state.counter}</div>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Counter Increase</button>
			</>
		);
	}
}
