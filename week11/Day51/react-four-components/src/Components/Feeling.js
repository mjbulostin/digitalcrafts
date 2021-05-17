import React, { Component } from 'react'

export default class Feeling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            great: "😃",
            notGreat: "😔",
            tired: "😴",
            hungry: "😋🤤",
            sore: "🥵",
        };
  
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <button onClick={() => 
                    this.setState({
                        great: this.state.great
                })}>
                    Great!
                </button>
                <button 
                    onClick={() => 
                        this.setState({
                            notGreat: this.state.notGreat
                        
                })}>Not Great</button>
                <button 
                    onClick={() => 
                        this.setState({
                            tired: this.state.tired

                        
                })}>Tired</button>
                <button 
                    onClick={() => 
                        this.setState({
                            hungry: this.state.hungry
                        
                })}>Hungry</button>
                <button 
                    onClick={() => 
                        this.setState({
                            sore: this.state.sore
                        
                })}>Sore</button>
            </div>
        );
    }
}
