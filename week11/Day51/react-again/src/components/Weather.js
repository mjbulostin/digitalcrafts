import React, { Component } from 'react'

export default class Weather extends Component {
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
                <h1>Weather.js</h1>
            </div>
        );
    }
}