import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props);
        // the point of using the constructor in react is to initialize your state
        this.state = {
            // state is a container that holds data, and lets us have access to it
            greeting: "",
            listOfPokemonCards:[],
            mapPoints: {},
            count: 0,
        };
        // this refers to the entire class
        // this allows you to have access to individual elements, things, stuff on this class
        // this is unique to a class in JS
        // this is even more unique in that 
    }
    // setState, allows you to access the state object
    render() {
        return (
            <div
                style={{
                    marginRight: "20px",
                    marginLeft: "20px",
                    backgroundColor: "green",
                    height: "300px",
                    width: "50%",
                }}
            >
                <h1>Class.js</h1>
                <h3>Info from App.js {this.props.greeting ? this.props.greeting : "nothing yet"}</h3>
                <p>this is the count {this.state.count}</p>
                <button onClick={() => 
                    this.setState({
                        count: this.state.count + 1
                })}>
                    Add
                </button>
                <button 
                    onClick={() => 
                        this.setState({
                        count: this.state.count - 1
                })}>Subtract</button>
            </div>
        );
    }
}
