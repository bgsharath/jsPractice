import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import PureCompFunc from "./PureCompFunc";

export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  name:'sharath',
         list:{a:1,b:2}
      }
    }

    componentDidMount(){
        const updateValue = {a:1,b:2}
        const interval = setInterval(()=>{
            this.setState({
                // name:'sharath',
                list:updateValue
            })
        },10000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

  render() {
    console.log('parent render')
    return (
      <>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <PureCompFunc name={this.state.name} />
      </>
    );
  }
}
